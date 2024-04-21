import Form from 'react-bootstrap/Form';
import React from 'react';

function Input(props) {
  return (
    <>
      <Form.Control 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange} />
      <br />
    </>
  );
}

export default Input;