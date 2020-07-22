import React, { Fragment } from 'react';
import yakKabLogo from '../img/yakKabLogoWhite.svg';
import { withRouter, NavLink, Link } from 'react-router-dom';
import auth from '../auth/auth-helper';

const navStyles = {
  backgroundColor: '#231f20',
};

const Navbar = withRouter(({ history }) => {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm' style={navStyles}>
      <Link to='/' className='navbar-brand'>
        <img
          className='d-inline-block align-top ml-5'
          src={yakKabLogo}
          alt='Yak Kab Logo'
          width='100px'
        />
      </Link>
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
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              className='nav-link'
              to='/pricing'
              activeClassName='active'
            >
              Pricing
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              className='nav-link'
              to='/contact'
              activeClassName='active'
            >
              Contact Us
            </NavLink>
          </li>

          {!auth.isAuthenticated() ? (
            <Fragment>
              <li className='nav-item'>
                <NavLink
                  exact
                  className='nav-link mr-3'
                  to='/login'
                  activeClassName='active'
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/create-account' activeClassName='active'>
                  <button className='btn btn-outline-light my-2 my-sm-0 mr-2'>
                    Create Account
                  </button>
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className='nav-item'>
                <NavLink
                  exact
                  className='nav-link mr-3'
                  to='/account'
                  activeClassName='active'
                >
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/' activeClassName='active'>
                  <button
                    className='btn btn-outline-light my-2 my-sm-0 mr-2'
                    onClick={() => {
                      auth.clearJWT(() => history.push('/'));
                    }}
                  >
                    Sign Out
                  </button>
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
