import React, { useState } from 'react';
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
  });

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
    <div className='d-flex aigin-items-center justify-content-center my-5'>
      <form className='text-center' onSubmit={clickSubmit}>
        <h1 className='mb-5 font-weight-light text-uppercase'>
          Create Account
        </h1>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            className='form-control'
            onChange={handleChange('firstName')}
            value={values.firstName}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            className='form-control'
            onChange={handleChange('lastName')}
            value={values.lastName}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Phone Number'
            className='form-control'
            onChange={handleChange('phoneNumber')}
            value={values.phoneNumber}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            className='form-control'
            onChange={handleChange('email')}
            value={values.email}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='password'
            className='form-control'
            onChange={handleChange('password')}
            value={values.password}
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>
          Create Account
        </button>
      </form>
    </div>
  );
}
