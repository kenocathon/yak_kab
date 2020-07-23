import React, { useState } from 'react';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import moment from 'moment';
import { createTransport } from '../user/api-transport';
import { findId } from '../auth/api-auth';
import auth from '../auth/auth-helper';

const boatRampOptions = [
  'Cartersville Leak Mounds',
  'Neels Landing',
  'Hardin Bridge',
  'Euharlee Rd.',
];

const HomePickup = (props) => {
 
  const [selectedDate, handleDateChange] = useState(moment());
  const [selectedTime, handleTimeChange] = useState(moment());
  const [checkbox, setCheckbox] = useState({
    useHomeAddress: true,
    isReturnHome: true
  })

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
    dropOff: 'Cartersville Leak Mounds'
  });


  const jwt = auth.isAuthenticated();
  const userId = findId();

  const handleCheckBox = (name) => (event) => {
    const checked = event.target.checked
    setCheckbox({
      [name]: checked
    })
    console.log(name)
  }
  const handleSelect = (event) => {
    const value = event.target.value
    setLocation({
      dropOff: value
    })
  }
  
  const handleOnChange = (name) => (event) => {
    const value = event.target.value;
    setLocation({
      ...location,
      pickUp: {
        [name]: value,
      }
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const transport = {
      pickUpDate: selectedDate.format('dddd MMM Mo YYYY'),
      pickUpTime: selectedTime.format('h:mm'),
      isHomePickup: true,
      customTrip: {
        dropOffLocation: location.dropOff,
        pickUpLocation: location.pickUp,
        isReturnHome: checkbox.isReturnHome,
      },
      shuttlePackage: 'custom',
    };

    createTransport(userId, { t: jwt.token }, transport).then((data) => {
      if (data.error) {
        setMessage({ error: data.error });
      } else {
        setMessage({ successMsg: 'Your trip was scheduled' });
       props.trackTransports()
      }
    });
  }

  return (
    <div className='container row'>
      {message.error && (
        <p className='text-error h5 font-weight-bold'>{message.error}</p>
      )}
      {message.successMsg && (
        <p className='text-success h5 font-weight-bold'>{message.successMsg}</p>
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
            value={location.dropOff}
            onChange={handleSelect}
          >
            {boatRampOptions.map((boatRamp) => {
              return (
                <option value={boatRamp} key={boatRamp}>
                  {boatRamp}
                </option>
              );
            })}
          </select>

          <div className='container row'>
            <div className='form-check col-md-5 col-12 my-3 ml-3 p-3'>
              <input
                type='checkbox'
                name='useHomeAddress'
                id='useHomeAddress'
                className='form-check-input'
                checked={checkbox.useHomeAddress}
                onChange={handleCheckBox('useHomeAddress')}
              />
              <label htmlFor='useHomeAddress' className='form-check-label h6'>
                Pickup from home address
              </label>
            </div>
            <div className='form-check col-12 col-lg-5 my-3 p-3'>
              <input
                type='checkbox'
                name='returnHome'
                id='returnHome'
                className='form-check-input'
                checked={checkbox.isReturnHome}
                onChange={handleCheckBox('isreturnHome')}
              />
              <label htmlFor='returnHome' className='form-check-label h6'>
                Return Trip(before 8pm)
              </label>
            </div>
          </div>

          {!checkbox.useHomeAddress && (
            <fieldset className='w-75'>
              <legend>Pickup Location</legend>
              <label className='h6' htmlFor='pickUpLocation'>
                Street
              </label>
              <input
                type='text'
                name='street'
                id='street'
                required={!checkbox.useHomeAddress}
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
                required={!checkbox.useHomeAddress}
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
                required={!checkbox.useHomeAddress}
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
                required={!checkbox.useHomeAddress}
                className='form-control'
                value={location.zipCode}
                onChange={handleOnChange('zipCode')}
              />
            </fieldset>
          )}
          <button
            type='submit'
            className='btn btn-outline-dark btn-lg btn-block my-3 w-75'
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
  

export default HomePickup;
