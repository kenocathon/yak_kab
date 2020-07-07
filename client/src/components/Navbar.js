import React from 'react';
import yakKabLogo from '../img/yakKabLogoWhite.svg';
import { withRouter, NavLink } from 'react-router-dom';

const navStyles = {
  backgroundColor: '#231f20',
};

const isActive = (history, path) => {
  if (history.location.pathname == path) return 'active';
  else return '';
};

const Navbar = withRouter(({ history }) => (
  <nav className='navbar navbar-dark navbar-expand-sm' style={navStyles}>
    <NavLink to='/' className='navbar-brand'>
      <img
        className='d-inline-block align-top ml-5'
        loading='lazy'
        src={yakKabLogo}
        alt='Yak Kab Logo'
        width='100px'
      />
    </NavLink>
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

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav ml-auto mr-5'>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' className='nav-link' to='/'>
            Home <span className='sr-only'>(current)</span>
          </NavLink>
        </li>
        <li className='nav-item' activeClassName='active'>
          <NavLink className='nav-link' to='/pricing'>
            Pricing
          </NavLink>
        </li>
        <li className='nav-item' activeClassName='active'>
          <NavLink className='nav-link' to='/contact'>
            Contact Us
          </NavLink>
        </li>
        <li className='nav-item' activeClassName='active'>
          <NavLink className='nav-link' to='/login'>
            Sign In
          </NavLink>
        </li>
      </ul>
      <NavLink to='/create-account' activeClassName='active'>
        <button className='btn btn-outline-light my-2 my-sm-0 mr-2'>
          Create Account
        </button>
      </NavLink>
    </div>
  </nav>
));

export default Navbar;
