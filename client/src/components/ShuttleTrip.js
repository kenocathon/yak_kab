import React, { useState } from 'react';
import { values } from 'lodash';

const ShuttleTrip = (props) => {
  const [values, setValues] = useState({
    isShuttleTrip: false,
  });

  const onButtonClick = () => {
    const value = !values.isShuttleTrip;
    setValues({
      ...values,
      isShuttleTrip: value,
    });
  };

  return (
    <div>
      <button
        className={
          values.isShuttleTrip
            ? 'btn btn-lg btn-info my-4'
            : 'btn btn-lg btn-outline-info my-4'
        }
        onClick={onButtonClick}
      >
        Schedule Shuttle Trip
      </button>
    </div>
  );
};

export default ShuttleTrip;
