import React, { useState } from 'react';
import ShuttleTrip from './ShuttleTrip';
import HomePickup from './HomePickup';

export default function TransportForms(props) {
  return (
    <div>
      {props.selectedTrip === 'homePickup' && (
        <HomePickup trackTransports={props.trackTransports} />
      )}
      {props.selectedTrip === 'shuttleTrip' && (
        <ShuttleTrip trackTransports={props.trackTransports} />
      )}
    </div>
  );
}
