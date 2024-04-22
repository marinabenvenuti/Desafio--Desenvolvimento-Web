import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

function Cards(props) {
  const Component = props.comp;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Component />
      </Card.Body>
    </Card>
  );
}

  
  export default Cards;