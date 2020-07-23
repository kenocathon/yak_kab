import React, { useState } from 'react';
import TransportForms from './TransportForms';
import TransportButtons from './TransportButtons';
import TransportList from './TransportList';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const Transports = () => {
  // when one button is selected the other will not be.
  const [buttonSelect, setButtonSelect] = useState(null);
  const [transportCreated, setTransportCreated] = useState(0);

  const tripSelected = (name) => {
    setButtonSelect(name);
  };

  //used to keep track of a new transport for rerender in TransportList.js
  const newTransport = () => {
    setTransportCreated(transportCreated + 1);
  };

  const layoutStyles = {
    minHeight: '40vh',
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
    <div>
      <section style={layoutStyles}>
        <h1 className='mt-4 col-12 '>Transports</h1>
        <TransportButtons handleButton={tripSelected} />
        <TransportForms
          selectedTrip={buttonSelect}
          trackTransports={newTransport}
        />
      </section>
      <TransportList newTransport={transportCreated} newTransport={transportCreated}/>
    </div>
    </MuiPickersUtilsProvider>
  );
};

export default Transports;
