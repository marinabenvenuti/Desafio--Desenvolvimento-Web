import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { BsArrowRight } from "react-icons/bs";


function HistoryCard({ title, previousNumbers}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {previousNumbers.length===0 ? <p>Sem números cadastrados</p> : null}
        {previousNumbers.map((previousNumber) => 
          <div key={previousNumber}>Entrada: {previousNumber[0]} <BsArrowRight /> Saída: {previousNumber[1]}</div>)}
      </Card.Body>
    </Card>
  );
}

  
  export default HistoryCard;