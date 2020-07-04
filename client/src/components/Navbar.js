import React from 'react';
import yakKabLogo from '../img/yakKabLogoWhite.svg';

const navStyles = {
  backgroundColor: '#231f20',
};

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm' style={navStyles}>
      <a href='/home' className='navbar-brand ml-3'>
        <img
          className='d-inline-block align-top'
          loading='lazy'
          src={yakKabLogo}
          alt='Yak Kab Logo'
          width='100px'
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='#'>
              Home <span class='sr-only'>(current)</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Pricing
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Scheduling
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Sign In
            </a>
          </li>
        </ul>
        <a href='#'>
          <button className='btn btn-outline-light my-2 my-sm-0 mr-2'>
            Create Account
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
