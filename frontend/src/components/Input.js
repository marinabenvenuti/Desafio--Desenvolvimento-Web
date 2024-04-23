import Form from 'react-bootstrap/Form';
import React from 'react';

function Input({type, placeholder, value, onChange}) {
  return (
    <>
      <Form.Control 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange} />
      <br />
    </>
  );
}

export default Input;