import React, { useState, useEffect } from 'react';
import { create } from '../user/api-user';

export default function CreateAccount() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    openDialog: false,
    error: '',
    frameHeight: '',
  });

  const wrapperStyles = {
    height: values.frameHeight - 290,
  };

  useEffect(() => {
    const innerFrameHeight = window.innerHeight;
    setValues({ frameHeight: innerFrameHeight });
  }, [values.frameHeight]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    const user = {
      firstName: values.firstName || undefined,
      lastName: values.lastName || undefined,
      phoneNumber: values.phoneNumber || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', openDialog: true });
      }
    });
  };

  return (
    <div className='container p-5 mt-5' style={wrapperStyles}>
      <h2 className='display-4'>Create Account</h2>
      <form action='' className='h-100 p-2 ' onSubmit={clickSubmit}>
        <div className='form-row my-2'>
          <div className='col-lg-6'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              className='form-control'
              required
              onChange={handleChange('firstName')}
            />
          </div>
          <div className='col-lg-6'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              className='form-control'
              required
              onChange={handleChange('lastName')}
            />
          </div>
        </div>
        <div className='form-row my-2'>
          <div className='col-lg-6'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              required
              onChange={handleChange('email')}
            />
          </div>
          <div className='col-lg-6'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              className='form-control'
              required
              onChange={handleChange('phoneNumber')}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-lg'>
            <label htmlFor='email'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              required
              onChange={handleChange('password')}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-success btn-lg btn-block mt-4'>
          Create Account
        </button>
      </form>
    </div>
  );
}
