import React, { useState } from 'react';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const wrapperStyles = {
    height: window.outerHeight - 200,
  };

  return (
    <div className='container' style={wrapperStyles}>
      <h2 className='display-4 my-5'>Contact Us</h2>
      <form className='h-100 p-2'>
        <div className='form-row'>
          <div className='col-5 p-4'>
            <h4 mt-5>Yak-Kab</h4>
            <p className='h6'>phone: 111-222-3333</p>
            <p className='h6'>email: support@yak-kab.com</p>
            <p className='h6'>location: Bartow County, GA</p>
            <p className='lead mt-4'>
              * Leave us a message and we <br /> will responde by email within
              24 hours
            </p>
          </div>
          <div className='col-7'>
            <label htmlFor='name' className='my-2'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              required
              placeholder='required'
              onChange={handleChange}
            />
            <label htmlFor='email' className='my-2'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              required
              placeholder='required'
              onChange={handleChange}
            />
            <label htmlFor='phoneNumber' className='my-2'>
              Phone Number
            </label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              className='form-control'
              placeholder='optional'
              onChange={handleChange}
            />
            <label htmlFor='message' className='my-2'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              className='form-control mb-4'
              onChange={handleChange}
            >
              Message
            </textarea>
            <button className='btn btn-success btn-block btn-lg mb-4' required>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
