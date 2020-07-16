import React, { Fragment, useState } from 'react';
import HomePickup from './HomePickup';
import ShuttleTrip from './ShuttleTrip';

const Transports = () => {
  const wrapperStyles = {
    height: window.outerHeight - 240,
  };
  return (
    <div style={wrapperStyles}>
      <h1 className='mt-4 col-12 '>Transports</h1>
      <HomePickup />
      <ShuttleTrip />
    </div>
  );
};

export default Transports;
