import React from 'react';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormInput from './FormInput';
import { read, update} from '../user/api-user';
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
  const [successMsg, setSuccessMsg] = useState('');
  const [formChange, setFormChange] = useState(true);
  const userId = findId();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const jwt = auth.isAuthenticated();

    readAddress(userId, { t: jwt.token }, signal).then((data) => {
      const addressFunction = () => {
        if (data && data.error) {
          setRedirectToSignin(true);
        } else {
            setAddressExists(true);
            setAddress({  ...data });
          }
      }
     addressFunction()
    });

    return () => {
      abortController.abort();
    };
  },[userId] );

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const jwt = auth.isAuthenticated();


    read(userId, { t: jwt.token }, signal).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setUser({ ...data });
      }
    });

    return () => {
      abortController.abort();
    };
  }, [userId]);

  const handleChange = (name) => (event) => {
    const target = event.target.value;
    setFormChange(false);
    if (name in user) {
      setUser({ ...user, [name]: target });
    } else {
      setAddress({ ...address, [name]: target });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jwt = auth.isAuthenticated();

    if (addressExists) {
      updateAddress(userId, { t: jwt.token }, address);
      setSuccessMsg('Your address has been successfully updated');
    } else {
      createAddress(userId, { t: jwt.token }, address);
      setSuccessMsg('Your address has been added to your profile');
    }
    update(userId, { t: jwt.token }, user);
    setFormChange(true);
  };

  if (redirectToSignin) {
    return <Redirect to='/signin' />;
  }

  return (
    <div className='container'>
      <h1 className='display-5 mt-5'>Profile</h1>
      {successMsg && (
        <p className='text-success font-weight-bold h5 bg-light'>
          {successMsg}
        </p>
      )}
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
        <Address
          address={address}
          handleChange={handleChange}
          buttonDisabled={formChange}
        />
      </form>
    </div>
  );
};

export default Profile;
