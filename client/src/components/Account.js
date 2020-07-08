import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Account = () => {
  return (
    <section className='container'>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id='transport-tab'
            data-toggle='tab'
            href='#transport'
            role='tab'
            aria-controls='transport'
            aria-selected='true'
          >
            Transports
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            id='profile-tab'
            data-toggle='tab'
            href='#profile'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
          >
            Profile
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            id='contact-tab'
            data-toggle='tab'
            href='#contact'
            role='tab'
            aria-controls='contact'
            aria-selected='false'
          >
            Contact
          </a>
        </li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div
          className='tab-pane fade show active'
          id='transport'
          role='tabpanel'
          aria-labelledby='home-tab'
        >
          ...
        </div>
        <div
          className='tab-pane fade'
          id='profile'
          role='tabpanel'
          aria-labelledby='profile-tab'
        >
          <Profile />
        </div>
        <div
          className='tab-pane fade'
          id='contact'
          role='tabpanel'
          aria-labelledby='contact-tab'
        >
          ...
        </div>
      </div>
    </section>
  );
};

export default Account;
