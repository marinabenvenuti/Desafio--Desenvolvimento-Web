import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from "react";

function Input(props) {
  const [number, setNumber] = useState();

  return (
    <>
      <Form.Control type={props.type} 
        placeholder={props.placeholder} 
        value={number}
        onChange={(e) => setNumber(e.target.value)}/>
      <br />
    </>
  );
}

export default Input;