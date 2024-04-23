import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import PrimeCalculation from './PrimeCalculation';

function CalculatorCard({ title, primeData, setPrimeData, handleHistory}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <PrimeCalculation primeData={primeData} setPrimeData={setPrimeData} handleHistory={handleHistory} />
      </Card.Body>
    </Card>
  );
}

  
  export default CalculatorCard;