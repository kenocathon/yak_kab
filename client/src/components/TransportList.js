import React, { useState, useEffect } from 'react';
import { readTransport, removeTransport } from '../user/api-transport';
import { findId } from '../auth/api-auth';
import auth from '../auth/auth-helper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const layoutStyles = {
  minHeight: '20em',
};

const TransportList = ({ newTransport}) => {
  const [transport, setTransport] = useState([]);
  const [message, setMessage] = useState('')
  const userId = findId();
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    readTransport(userId, { t: jwt.token }, signal).then((data) => {
      setTransport(data);
    });
    return () => {
      abortController.abort();
    };
  }, [userId, newTransport, jwt]);

  const handleDelete = (transId) => (event) => {
    const value = event.target.id
    removeTransport(userId, {t: jwt.token}, transId).then(data => {
      if(data.msg){
        setMessage(data.msg)
        console.log(value)
      }
    })
  }

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
            <th scope='col'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {transport.map((trip) => (
            <tr key={trip._id}>
              {trip.shuttlePackage !== 'custom' ? (
                <th scope='row' className="pt-4">Shuttle</th>
              ) : (
                <th scope='row' className="pt-4">Home Pickup</th>
              )}
              <td className="pt-4">{trip.pickUpDate}</td>
              <td className="pt-4">{trip.pickUpTime}</td>

              
              {trip.shuttlePackage === 'shortTrip' && (
                 <td className="pt-4">Hardin Bridge Rd.</td>
              )}
              {trip.shuttlePackage === 'mediumTrip' &&  <td className="pt-4">Neels Landing</td>}
              {trip.shuttlePackage === 'longTrip' &&  <td className="pt-4">Cartersville Leake Mounds</td>}
              {trip.shuttlePackage === 'custom' && trip.isHomePickup && <td className="pt-4">Home Address </td>}

              
              
              {trip.shuttlePackage === 'shortTrip' &&  <td className="pt-4">Euharlee Rd.</td>}
              {trip.shuttlePackage === 'mediumTrip' &&  <td className="pt-4">Hardin Bridge</td>}
              {trip.shuttlePackage === 'longTrip' && (
                 <td className="pt-4">Euharlee Rd.</td>
              )}
              {trip.shuttlePackage === 'custom' && (
                 <td className="pt-4">{trip.customTrip.dropOffLocation}</td>
              )}
              <td>
                <IconButton onClick={handleDelete(trip._id)} name={trip._id}>
                <DeleteIcon />
              </IconButton>
            </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransportList;
