import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [style, setStyle] = useState({
    frameheight: '',
  });

  const wrapperStyles = {
    height: style.frameHeight - 240,
  };

  useEffect(() => {
    const innerFrameHeight = window.innerHeight;
    setStyle({ frameHeight: innerFrameHeight });
  }, [style.frameHeight]);

  return (
    <div className='container' style={wrapperStyles}>
      <h2 className='display-4 my-5'>Pricing</h2>
      <table class='table h-50'>
        <thead class='thead-dark'>
          <tr>
            <th scope='col'>Service</th>
            <th scope='col'>Price</th>
            <th scope='col'>Pickup Time</th>
            <th scope='col'>Float Distance</th>
            <th scope='col'>Float Length</th>
            <th scope='col'>Pickup Location</th>
            <th scope='col'>Dropoff Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Shuttle</th>
            <td>$14/Adult | $10/Child</td>

            <td>10am</td>
            <td>8 miles</td>
            <td>4-6 hours</td>
            <td>Cartersville Leake Mounds</td>
            <td>Euharlee Rd.</td>
          </tr>
          <tr>
            <th scope='row'>Shuttle</th>
            <td>$12/Adult | $10/Child</td>
            <td>Noon</td>
            <td>6 miles</td>
            <td>3-5 hours</td>
            <td>Neels Landing</td>
            <td>Hardin Bridge</td>
          </tr>
          <tr>
            <th scope='row'>Shuttle</th>
            <td>$10/Adult | $8/Child</td>
            <td>2pm</td>
            <td>3 miles</td>
            <td>2-3 hours</td>
            <td>Hardin Bridge</td>
            <td>Euharlee Rd.</td>
          </tr>
          <tr>
            <th scope='row'>Home Pickup</th>
            <td>$1/Mile | $20 minumum</td>
            <td>By Appointment</td>
            <td>Your Choice</td>
            <td>Your Choice</td>
            <td>Your Choice</td>
            <td>Your Choice</td>
          </tr>
        </tbody>
      </table>
      <p className='bg-light p-2'>
        * All home pickup appointments must be made no less than 24hr before
        desired pickup <br />* All refunds must also be requested prior to 24hrs
        of the trip.
      </p>
    </div>
  );
};

export default Pricing;
