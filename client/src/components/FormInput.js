import React from 'react';

const FormInput = (props) => (
  <div className='form-group'>
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
  </div>
);

export default FormInput;
