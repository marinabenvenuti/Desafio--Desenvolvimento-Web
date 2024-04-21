import React from 'react';
import Card from 'react-bootstrap/Card';
import PrimeCalculation from './PrimeCalculation';
import './Card.css';

function Cards(props) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <PrimeCalculation />
          
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;