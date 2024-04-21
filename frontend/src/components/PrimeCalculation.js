import React, { useState } from "react";
import Buttonn from "./Button";
import Input from "./Input";
import api from '../Api.js';

function PrimeCalculation({primeList}) {
    const [number, setNumber] = useState();

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const handleClick = () => {
        const num = parseInt(number);
        console.log(number);
        console.log('Número:', num);
        if (isNaN(num)) {
            alert('Digite um número antes de enviar');
        } else if(num <= 0){
            alert('Número inválido. Digite um número maior que zero');
        } else {
            getPrimes(number)
        }
    };

    const getPrimes = (number) => {
        api.get("/primeNumbers?k="+number)
        api.then((response) => {
            primeList(number, response.primeNumbersList, response.executionTime)
        })
    };

    return (
        <>
            <Input
                onChange={handleChange}
                type='number'
                placeholder='Digite o número'
                value={number}
            />

            <Buttonn text='Enviar' onClick={handleClick} />
            <Buttonn text='Limpar' onClick={() => { setNumber(''); }} />
        </>
    );
}

export default PrimeCalculation;