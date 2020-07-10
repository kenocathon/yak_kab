import React from 'react';
import Dashboard from './Dashboard';
import Profile from './Profile';

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
          id='dashboard'
          role='tabpanel'
          aria-labelledby='dashboard-tab'
        >
          <Dashboard />
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
