import React, { useState } from "react";
import Buttonn from "./Button";
import Input from "./Input";
import PrimeList from "./PrimeList.js";
import api from '../Api.js';

function PrimeCalculation({primeList}) {
    const [number, setNumber] = useState();

    const handleClick = () => {
        const num = parseInt(number);
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
            <PrimeList number={number} primes ={response.primeNumbersList} execution_time={response.executionTime} />
        })
    }

    return (
        <>
            <Input
                onChange={(e) => setNumber(e.target.value)}
                type='number'
                placeholder='Digite o número'
                value={number}
            />

            <Buttonn text='Enviar' onClick={handleClick} />
            <Buttonn text='Limpar' onClick={() => { setNumber('')}} />
        </>
    );
}

export default PrimeCalculation;
