import React, { useState } from 'react';
import TransportForms from './TransportForms';
import TransportButtons from './TransportButtons';

const Transports = () => {
  // when one button is selected the other will not be.
  const [buttonSelect, setButtonSelect] = useState(null);

  const wrapperStyles = {
    height: window.outerHeight - 240,
  };

  const tripSelected = (name) => {
    setButtonSelect(name);
  };

  return (
    <div style={wrapperStyles}>
      <h1 className='mt-4 col-12 '>Transports</h1>
      <TransportButtons handleButton={tripSelected} />
      <TransportForms selectedTrip={buttonSelect} />
    </div>
  );
};

export default Transports;
