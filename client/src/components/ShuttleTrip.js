import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';

const ShuttleTrip = (props) => {
  const [selectedDate, handleDateChange] = useState(moment());
  const [buttonSelect, setButtonSelect] = useState({
    longTrip: false,
    mediumTrip: false,
    shortTrip: false,
  });
  const [solution, setSolution] = useState('');

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
  };

  return (
    <div className='container row'>
      <div className='row container'>
        <fieldset>
          <legend>Choose from available shuttles</legend>
          <div className='container row justify-content-evenly my-3'>
            <div className='col-4'>
              <h5>10am Departure</h5>
              <button
                name='longTrip'
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
        </fieldset>
        <div className='col-12 my-3'>
          <h6>Shuttle Date</h6>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            disablePast
            shouldDisableDate={disableWeekdays}
          />
        </div>
      </div>
      <button className='btn btn-outline-dark btn-lg btn-block w-50 mt-3'>
        Submit
      </button>
    </div>
  );
};

export default ShuttleTrip;
