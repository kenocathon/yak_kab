import React from 'react';
import { useState, useEffect } from 'react';
import FormInput from './FormInput';
import { read } from '../user/api-user';
import { readAddress, updateAddress, createAddress } from '../user/api-address';
import { findId } from '../auth/api-auth';
import auth from '../auth/auth-helper';
import Address from './Address';

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
    state: '',
    zipCode: '',
  });

  const [addressExists, setAddressExists] = useState(false);
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const [error, setError] = useState('');

  const id = findId();
  const jwt = auth.isAuthenticated();

  console.log(address);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    readAddress(id, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        if (!data.mssg) {
          setAddressExists(true);
        }
        setAddress({ ...address, ...data });
      }
    });
    return () => {
      abortController.abort();
    };
  }, [id]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

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

  const handleChange = (name) => (event) => {
    const target = event.target.value;
    if (name in user) {
      setUser({ ...user, [name]: target });
    } else {
      setAddress({ ...address, [name]: target });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressExists) {
      updateAddress(id, { t: jwt.token }, address);
    } else {
      createAddress(id, { t: jwt.token }, address);
    }
  };

  return (
    <div className='container'>
      <h2 className='display-5 mt-5'>Profile</h2>
      <form className='h-100 p-2' onSubmit={handleSubmit}>
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
        <Address address={address} handleChange={handleChange} />
      </form>
    </div>
  );
};

export default Profile;
