import React, { Fragment } from 'react';

const FormInput = (props) => (
  <Fragment>
    <label htmlFor='props.name' className='mb-2'>
      {props.label}
    </label>
    <input
      type='text'
      name={props.name}
      id={props.name}
      className='form-control col-md-9 p-1'
      onChange={props.handleChange}
      value={props.value}
    />
  </Fragment>
);

export default FormInput;
