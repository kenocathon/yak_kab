import React, { useState, useEffect } from 'react';
import { readTransport } from '../user/api-transport';
import { findId } from '../auth/api-auth';
import auth from '../auth/auth-helper';

const layoutStyles = {
  minHeight: '20em',
};

const TransportList = ({ newTransport }) => {
  const [transport, setTransport] = useState([]);
  const userId = findId();
  
  const reRenderTransports = newTransport;

  useEffect(() => {
    
    const jwt = auth.isAuthenticated();
    const abortController = new AbortController();
    const signal = abortController.signal;

    readTransport(userId, { t: jwt.token }, signal).then((data) => {
      setTransport(data);
      
    });
    return () => {
      abortController.abort();
    };
  }, [userId, reRenderTransports]);

  return (
    <section style={layoutStyles}>
      <h2 className='display-5 my-3'>Scheduled Trips</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Trip Type</th>
            <th scope='col'>Date</th>
            <th scope='col'>Time</th>
            <th scope='col'>Pickup Location</th>
            <th scope='col'>Dropoff Location</th>
          </tr>
        </thead>

        <tbody>
          {transport.map((trip) => (
            <tr key={trip._id}>
              {trip.shuttlePackage !== 'custom' ? (
                <th scope='row'>Shuttle</th>
              ) : (
                <th scope='row'>Home Pickup</th>
              )}
              <td>{trip.pickUpDate}</td>
              <td>{trip.pickUpTime}</td>

              
              {trip.shuttlePackage === 'shortTrip' && (
                <td>Hardin Bridge Rd.</td>
              )}
              {trip.shuttlePackage === 'mediumTrip' && <td>Neels Landing</td>}
              {trip.shuttlePackage === 'longTrip' && <td>Cartersville Leake Mounds</td>}
              {trip.shuttlePackage === 'custom' && <td>{trip.customTrip.pickUpLocation}</td>}

              
              {trip.shuttlePackage === 'longTrip' && (
                <td>Euharlee Rd.</td>
              )}
              {trip.shuttlePackage === 'shortTrip' && <td>Euharlee Rd.</td>}
              {trip.shuttlePackage === 'mediumTrip' && <td>Hardin Bridge</td>}
              {trip.shuttlePackage === 'shortTrip' && <td>Euharlee Rd.</td>}
              {trip.shuttlePackage === 'custom' && (
                <td>{trip.customTrip.dropOffLocaion}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransportList;
