import React, { useState } from 'react';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import moment from 'moment';
import { createTransport } from '../user/api-transport';
import { findId } from '../auth/api-auth';
import auth from '../auth/auth-helper';
import ShuttleTrip from './ShuttleTrip';

export default function HomePickups(props) {
  const [selectedDate, handleDateChange] = useState(moment());
  const [selectedTime, handleTimeChange] = useState(moment());
  const [useHomeAddress, setUseHomeAddress] = useState(true);
  const [isReturnHome, setIsReturnHome] = useState(true);

  const [message, setMessage] = useState({
    error: '',
    successMsg: '',
  });

  const [location, setLocation] = useState({
    pickUp: {
      street: '',
      city: '',
      state: 'GA',
      zipCode: '',
    },
    dropOff: {
      boatRampOptions: [
        'Cartersville Leak Mounds',
        'Neels Landing',
        'Hardin Bridge',
        'Euharlee Rd.',
      ],
      selectedBoatRamp: '',
    },
  });

  const jwt = auth.isAuthenticated();
  const userId = findId();

  const handleOnChange = (name) => (event) => {
    const value = event.target.value;
    if (name === 'checkbox') {
      setUseHomeAddress(!useHomeAddress);
    } else if (name === 'returnHome') {
      setIsReturnHome(!isReturnHome);
    } else if (name === 'select') {
      setLocation({
        dropOff: {
          selectedBoatRamp: value,
        },
      });
    } else {
      setLocation({
        ...location,
        pickUp: {
          [name]: value,
        },
      });
    }
  };

  const onFormSubmit = () => {
    const transport = {
      pickUpDate: selectedDate,
      pickUpTime: selectedTime,
      isHomePickup: true,
      isReturnHome,
      customTrip: {
        dropOffLocation: location.dropOff.selectedBoatRamp,
        pickUpLocation: location.pickUp,
      },
      shuttlePackage: 'custom',
    };

    createTransport(userId, { t: jwt.token }, transport).then((data) => {
      if (data.error) {
        setMessage({ error: data.error });
      } else {
        setMessage({ successMsg: 'Your trip was scheduled' });
      }
    });
  };

  return (
    <div>
      {props.selectedTrip === 'homePickup' && (
        <div className='container row'>
          {message.error && (
            <p className='text-error h5 font-weight-bold'>{message.error}</p>
          )}
          {message.successMsg && (
            <p className='text-success h5 font-weight-bold'>
              {message.successMsg}
            </p>
          )}
          <div className='row container'>
            <div className='col-sm-3 col-12 my-3'>
              <h6>Pickup Date</h6>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                disablePast
              />
            </div>
            <div className='col-sm-4 col-12 my-3'>
              <h6>Pickup Time</h6>
              <TimePicker value={selectedTime} onChange={handleTimeChange} />
            </div>
          </div>

          <form className='form-group row container' onSubmit={onFormSubmit}>
            <fieldset className='col-8 my-3'>
              <legend>Location Info</legend>
              <label htmlFor='boatRamps' className='font-weight-bold mt-2'>
                Boat Ramp Dropoff
              </label>
              <select
                name='boatRamps'
                className='form-control w-75'
                id='boatRamps'
                onChange={handleOnChange('select')}
              >
                {location.dropOff.boatRampOptions.map((boatRamp) => {
                  return <option key={boatRamp}>{boatRamp}</option>;
                })}
              </select>

              <div className='container row'>
                <div className='form-check col-md-5 col-12 my-3 ml-3 p-3'>
                  <input
                    type='checkbox'
                    name='useHomeAddress'
                    id='useHomeAddress'
                    className='form-check-input'
                    checked={useHomeAddress}
                    onChange={handleOnChange('checkbox')}
                  />
                  <label
                    htmlFor='useHomeAddress'
                    className='form-check-label h6'
                  >
                    Pickup from home address
                  </label>
                </div>
                <div className='form-check col-12 col-lg-5 my-3 p-3'>
                  <input
                    type='checkbox'
                    name='returnHome'
                    id='returnHome'
                    className='form-check-input'
                    checked={isReturnHome}
                    onChange={handleOnChange('returnHome')}
                  />
                  <label htmlFor='returnHome' className='form-check-label h6'>
                    Return Trip (before 8pm)
                  </label>
                </div>
              </div>

              {!useHomeAddress && (
                <fieldset className='w-75'>
                  <legend>Pickup Location</legend>
                  <label className='h6' htmlFor='pickUpLocation'>
                    Street
                  </label>
                  <input
                    type='text'
                    name='street'
                    id='street'
                    required={!useHomeAddress}
                    className='form-control'
                    value={location.street}
                    onChange={handleOnChange('street')}
                  />
                  <label className='h6' htmlFor='pickUpLocation'>
                    City
                  </label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    required={!useHomeAddress}
                    className='form-control'
                    value={location.city}
                    onChange={handleOnChange('city')}
                  />
                  <label className='h6' htmlFor='pickUpLocation'>
                    State
                  </label>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    required={!useHomeAddress}
                    className='form-control'
                    value={location.state}
                  />
                  <label className='h6' htmlFor='pickUpLocation'>
                    Zipcode
                  </label>
                  <input
                    type='text'
                    name='zipCode'
                    id='zipCode'
                    required={!useHomeAddress}
                    className='form-control'
                    value={location.zipCode}
                    onChange={handleOnChange('zipCode')}
                  />
                </fieldset>
              )}
              <button
                type='button'
                className='btn btn-outline-dark btn-lg btn-block my-3 w-75'
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      )}
      {props.selectedTrip === 'shuttleTrip' && <ShuttleTrip />}
    </div>
  );
}
