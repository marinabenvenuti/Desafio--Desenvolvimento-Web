import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css';

function Buttonn(props){
    return(
        <Button variant="outline-secondary" onClick={props.onClick}>{props.text}</Button>
    )
}

export default Buttonn;