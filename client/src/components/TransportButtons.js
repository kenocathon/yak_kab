import React, { useState } from 'react';

const TransportButtons = ({ handleButton }) => {
  const [tripType, setTripType] = useState(null);

  const buttonClick = (e) => {
    const trip = e.target.name;
    if (trip === 'shuttleTrip' && tripType === 'shuttleTrip') {
      setTripType(null);
      handleButton(null);
    } else if (trip === 'homePickup' && tripType === 'homePickup') {
      setTripType(null);
      handleButton(null);
    } else if (trip === 'shuttleTrip') {
      setTripType('shuttleTrip');
      handleButton('shuttleTrip');
    } else {
      setTripType('homePickup');
      handleButton('homePickup');
    }
  };

  return (
    <div className='container row'>
      <button
        name='homePickup'
        className={
          tripType === 'homePickup'
            ? 'btn btn-lg btn-info my-4 col-lg-3 col-12 mr-4'
            : 'btn btn-lg btn-outline-info my-4 col-lg-3 col-12 mr-4'
        }
        onClick={buttonClick}
      >
        Schedule Home Pickup
      </button>
      <button
        name='shuttleTrip'
        className={
          tripType === 'shuttleTrip'
            ? 'btn btn-lg btn-info my-4 col-lg-3 col-12'
            : 'btn btn-lg btn-outline-info my-4 col-lg-3 col-12'
        }
        onClick={buttonClick}
      >
        Schedule Shuttle Trip
      </button>
    </div>
  );
};

export default TransportButtons;
