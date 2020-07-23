import React from 'react';
import Profile from './Profile';
import Transports from './Transports';

const Account = () => {
  return (
    <section className='container'>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id='dashboard-tab'
            data-toggle='tab'
            href='#dashboard'
            role='tab'
            aria-controls='dashboard'
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
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div
          className='tab-pane fade show active'
          id='dashboard'
          role='tabpanel'
          aria-labelledby='dashboard-tab'
        >
          <Transports />
        </div>
        <div
          className='tab-pane fade'
          id='profile'
          role='tabpanel'
          aria-labelledby='profile-tab'
        >
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default Account;
