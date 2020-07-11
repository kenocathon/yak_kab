import React, { useState } from 'react';
import FormInput from './FormInput';

const HomePickup = () => {
  const [values, setValues] = useState({
    pickUpDate: '',
    pickUpTime: '',
    pickUpLocation: '',
    dropOffLocation: '',
    isHomePickup: false,
  });

  const handleChange = (name) => (event) => {
    const target = event.target.value;
    setValues({ ...values, [name]: target });
  };

  const onButtonClick = () => {
    const value = !values.isHomePickup;
    setValues({
      ...values,
      isHomePickup: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container'>
      <div className='row'>
        <button
          className={
            values.isHomePickup
              ? 'btn btn-lg btn-primary col-md-6 my-4'
              : 'btn btn-lg btn-outline-primary col-md-6 my-4'
          }
          onClick={onButtonClick}
        >
          Schedule Home Pickup
        </button>
      </div>
      {values.isHomePickup && (
        <div className='card-body'>
          <form onSubmit={handleSubmit} className='form-row'>
            <fieldset className='col-md-7'>
              <legend>Schedule a transport</legend>
              <div className='form-group'>
                <FormInput
                  label='Pick up date'
                  name='pickUpDate'
                  value={values.pickUpDate}
                  handleChange={handleChange('pickUpDate')}
                />
                <FormInput
                  label='Pick up time'
                  name='pickUpTime'
                  value={values.pickUpTime}
                  handleChange={handleChange('pickUpTime')}
                />
                <FormInput
                  label='Pick up location'
                  name='pickUpLocation'
                  value={values.pickUpLocation}
                  handleChange={handleChange('pickUpLocation')}
                />
                <FormInput
                  label='Dropoff location'
                  name='dropOffLocation'
                  value={values.dropOffUpLocation}
                  handleChange={handleChange('dropOffLocation')}
                />
                <button type='submit' className='btn btn-primary my-3'>
                  Schedule
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePickup;
