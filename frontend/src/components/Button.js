import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css';

function Buttonn({text, onClick}){
    return(
        <Button variant="outline-secondary" onClick={onClick}>{text}</Button>
    )
}

export default Buttonn;