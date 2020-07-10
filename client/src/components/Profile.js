import React from 'react';
import { useState, useEffect } from 'react';
import FormInput from './FormInput';
import { read } from '../user/api-user';
import { readAddress } from '../user/api-address';
import { findId } from '../auth/api-auth';
import auth from '../auth/auth-helper';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: 'GA',
    zipCode: '',
  });
  const [redirectToSignin, setRedirectToSignin] = useState(false);

  const id = findId();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const jwt = auth.isAuthenticated();

    read(id, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setUser({ ...user, ...data });
      }
    });
    return () => {
      abortController.abort();
    };
  }, [id]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const jwt = auth.isAuthenticated();

    readAddress(id, { t: jwt.token }, signal).then((data) => {
      if (address) {
        console.log('address exists');
      }
    });
    return () => {
      abortController.abort();
    };
  }, [id, address]);

  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  return (
    <div className='container'>
      <h2 className='display-5 mt-5'>Profile</h2>
      <form className='h-100 p-2'>
        <fieldset className='my-3 p-3 row'>
          <legend>Personal Information</legend>
          <FormInput
            label='First Name'
            name='firstName'
            value={user.firstName}
            handleChange={handleChange('firstName')}
          />
          <FormInput
            label='Last Name'
            name='lastName'
            value={user.lastName}
            handleChange={handleChange('lastName')}
          />

          <FormInput
            label='Email'
            name='email'
            value={user.email}
            handleChange={handleChange('email')}
          />
          <FormInput
            label='Phone Number'
            name='phoneNumber'
            value={user.phoneNumber}
            handleChange={handleChange('phoneNumber')}
          />
        </fieldset>

        <fieldset className='row p-3'>
          <legend className='mb-0'>
            Address
            <span className='lead small'>
              (Must be filled out for home pickups)
            </span>
          </legend>
          <FormInput
            label='Street'
            name='street'
            value={user.street}
            handleChange={handleChange('street')}
          />
          <FormInput
            label='City'
            name='city'
            value={user.city}
            handleChange={handleChange('city')}
          />
          <FormInput
            label='State'
            name='state'
            value={user.state}
            handleChange={handleChange('state')}
          />
          <FormInput
            label='Zipcode'
            name='zipcode'
            value={user.zipCode}
            handleChange={handleChange('zipCode')}
          />
          <button
            className='btn btn-success btn-block btn-lg my-5 col-md-9'
            required
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Profile;
