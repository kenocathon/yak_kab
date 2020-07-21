import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';
import { createTransport } from '../user/api-transport';
import auth from '../auth/auth-helper';
import { findId } from '../auth/api-auth';

const ShuttleTrip = (props) => {
  const [selectedDate, handleDateChange] = useState(moment());
  const [tripTime, setTripTime] = useState('');
  const [buttonSelect, setButtonSelect] = useState({
    longTrip: false,
    mediumTrip: false,
    shortTrip: false,
  });
  const [message, setMessage] = useState({
    successMsg: '',
    error: '',
  });
  const userId = findId();
  const jwt = auth.isAuthenticated();

  const disableWeekdays = (date) => {
    return !(date.day() === 0 || date.day() === 5 || date.day() === 6);
  };

  const buttonHandler = (e) => {
    const selectedButton = e.target.name;
    const newState = {};
    const falseButtons = Object.keys(buttonSelect).filter(
      (button) => button != selectedButton
    );
    for (const key of falseButtons) {
      newState[key] = false;
    }
    setButtonSelect({ ...newState, [selectedButton]: true });
    if (selectedButton === 'shortTrip') {
      setTripTime('10:00am');
    } else if (selectedButton === 'mediumTrip') {
      setTripTime('12:00pm');
    } else {
      setTripTime('2:00pm');
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const selectedPackage = Object.keys(buttonSelect).filter(
      (key) => buttonSelect[key]
    );
    if (selectedPackage) {
      const transport = {
        pickUpDate: selectedDate.format('dddd MMM Mo YYYY'),
        pickUpTime: tripTime,
        isHomePickup: false,
        isReturnHome: false,
        shuttlePackage: selectedPackage[0],
      };
      createTransport(userId, { t: jwt.token }, transport).then((data) => {
        setMessage({ ...message, successMsg: data.message });
        props.trackTransports();
      });
    } else {
      setMessage({ ...message, error: 'You must choose a package' });
    }
  };

  return (
    <div className='container row'>
      <div className='row container'>
        {message.successMsg && (
          <p className='text-success h5 font-weight-bold'>
            {message.successMsg}
          </p>
        )}
        {message.error && (
          <p className='text-error h5 font-weight-bold'>{message.error}</p>
        )}
        <fieldset className='col-12'>
          <legend>Sheduling</legend>
          <div className='col-12 my-3'>
            <h6>Shuttle Date</h6>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              disablePast
              shouldDisableDate={disableWeekdays}
            />
          </div>
        </fieldset>

        <form className='form-group' onSubmit={formSubmit}>
          <fieldset>
            <legend>Choose from available shuttles</legend>
            <div className='container row justify-content-evenly my-3'>
              <div className='col-4'>
                <h5>10am Departure</h5>
                <button
                  name='longTrip'
                  type='button'
                  className={
                    buttonSelect.longTrip
                      ? 'btn btn-lg btn-primary'
                      : 'btn btn-lg btn-outline-primary'
                  }
                  onClick={buttonHandler}
                >
                  4-6 Hour Float
                </button>
              </div>

              <div className='col-4'>
                <h5>12pm Departure</h5>

                <button
                  name='mediumTrip'
                  type='button'
                  className={
                    buttonSelect.mediumTrip
                      ? 'btn btn-lg btn-primary'
                      : 'btn btn-lg btn-outline-primary'
                  }
                  onClick={buttonHandler}
                >
                  3-5 Hour Float
                </button>
              </div>

              <div className='col-4'>
                <h5>2pm Departure</h5>

                <button
                  name='shortTrip'
                  type='button'
                  className={
                    buttonSelect.shortTrip
                      ? 'btn btn-lg btn-primary'
                      : 'btn btn-lg btn-outline-primary'
                  }
                  onClick={buttonHandler}
                >
                  2-3 Hour Float
                </button>
              </div>
            </div>
            <button className='btn btn-outline-dark btn-lg btn-block mt-5'>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ShuttleTrip;
