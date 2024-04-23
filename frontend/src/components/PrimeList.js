import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


function PrimeList({number, primes, execution_time}){
    return (
        <div id="primes">
            <ListGroup variant="flush">
            <ListGroup.Item>Entrada: {number}</ListGroup.Item>
            <ListGroup.Item>Resultado: {primes} números primos antes de {number}</ListGroup.Item>
            <ListGroup.Item>Tempo de execução: {execution_time} milissegundos</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default PrimeList