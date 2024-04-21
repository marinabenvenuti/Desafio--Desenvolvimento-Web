import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function PrimeList(props){
    return (
        <div id="primes">
            <ListGroup variant="flush">
            <ListGroup.Item>Entrada: {props.number}</ListGroup.Item>
            <ListGroup.Item>Resultado: {props.primes}</ListGroup.Item>
            <ListGroup.Item>Tempo de execução: {props.execution_time}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default PrimeList