import React from 'react';
import heroKayak from '../img/heroKayak.svg';

const jumboStyles = {
  backgroundImage: 'url(' + heroKayak + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Jumbotron = () => {
  return (
    <div className='jumbotron jumbotron-fluid text-light' style={jumboStyles}>
      <div className='container d-flex flex-column align-items-end'>
        <h1 className='display-3'>Welcome to Yak-Kab</h1>
        <p className='lead mb-2 mr-3 my-3'>The Etowah River pickup service</p>
        <p className='mr-3'>Eliminating the hastle of vehicle dropoff!</p>
        <p className='lead'>
          <a
            className='btn btn-info btn-lg my-3 mr-3'
            href='Jumbo action link'
            role='button'
          >
            Schedule a pickup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
