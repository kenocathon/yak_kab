import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';

const Address = (props) => {
  const { street, state, city, zipCode } = props.address;
  return (
    <fieldset className='row p-3'>
      <legend className='mb-0'>Home Address</legend>
      <FormInput
        label='Street'
        name='street'
        value={street}
        handleChange={props.handleChange('street')}
      />
      <FormInput
        label='City'
        name='city'
        value={city}
        handleChange={props.handleChange('city')}
      />
      <FormInput
        label='State'
        name='state'
        value={state}
        handleChange={props.handleChange('state')}
      />
      <FormInput
        label='Zipcode'
        name='zipcode'
        value={zipCode}
        handleChange={props.handleChange('zipCode')}
      />
      <button
        className='btn btn-success btn-block btn-lg my-5 col-md-9'
        disabled={props.buttonDisabled}
      >
        Update Profile
      </button>
    </fieldset>
  );
};

export default Address;
