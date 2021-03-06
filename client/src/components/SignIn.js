import React, { useState } from 'react';
import { signin } from '../auth/api-auth';
import { Redirect } from 'react-router-dom';
import auth from '../auth/auth-helper';

export default function SignIn(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    frameHeight: '',
    error: '',
    redirectToReferrer: false,
  });

  const wrapperStyles = {
    height: window.outerHeight - 250,
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.error(values.error);
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: '', redirectToReferrer: true });
          console.log(values.redirectToReferrer);
        });
      }
    });
  };

  const { from } = props.location.state || {
    from: {
      pathname: '/',
    },
  };

  const { redirectToReferrer } = values;

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div className='container mt-5 pt-5' style={wrapperStyles}>
      <h2 className='display-4 '>Sign In</h2>
      <form action='' className='h-100 p-2' onSubmit={clickSubmit}>
        <div className='form-group row'>
          <div className='col-sm-8'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control my-2'
              required
              onChange={handleChange('email')}
            />

            <label htmlFor='email'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              required
              onChange={handleChange('password')}
            />

            <button
              type='submit'
              className='btn btn-success btn-lg btn-block mt-4'
            >
              Submit
            </button>
            {values.error && (
              <p className='bg-error'>`Error: ${values.error}`</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
