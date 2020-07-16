import React, { useState } from 'react';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import moment from 'moment';

export default function HomePickups() {
  const [selectedDate, handleDateChange] = useState(moment());
  const [selectedTime, handleTimeChange] = useState(moment());

  const [values, setValues] = useState({
    isHomePickup: false,
  });

  const onButtonClick = () => {
    const value = !values.isHomePickup;
    setValues({ isHomePickup: value });
  };

  return (
    <div className='float-left'>
      <button
        className={
          values.isHomePickup
            ? 'btn btn-lg btn-info my-4 mr-3'
            : 'btn btn-lg btn-outline-info my-4 mr-3'
        }
        onClick={onButtonClick}
      >
        Schedule Home Pickup
      </button>

      {values.isHomePickup && (
        <div className='container'>
          <h6>Pickup Date</h6>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            disablePast
          />
          <h6 className='mt-3'>Pickup Time</h6>
          <TimePicker value={selectedTime} onChange={handleTimeChange} />
        </div>
      )}
    </div>
  );
}
