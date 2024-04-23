import React, { useState } from "react";
import Buttonn from "./Button";
import Input from "./Input";
import api from '../api.js';
import PrimeList from "./PrimeList.js";

function PrimeCalculation({ handleHistory }) {
    const [primeData, setPrimeData] = useState(null);
    const [number, setNumber] = useState('');
    const [showPrimeList, setShowPrimeList] = useState(false);

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const handleClick = () => {
        const num = parseInt(number);
        if (isNaN(num)) {
            alert('Digite um número antes de enviar');
        } else if(num <= 0){
            alert('Número inválido. Digite um número maior que 0 ');
        } else {
            getPrimes(number)
        }
    };

    const getPrimes = (number) => {
        api
        .get("/primeNumbers?k="+number)
        .then((response) => {
            const newPrimeData = {
                number: number,
                primes: response.data.amountOfPrimeNumbers,
                execution_time: response.data.executionTime
            };
            setPrimeData(newPrimeData);
            setShowPrimeList(true);
            handleHistory([number, newPrimeData.primes]);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro " + err);
        })
    };

    const handleClear = () => {
        setNumber('');
        setShowPrimeList(false);
        setPrimeData(null);
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
            <Buttonn text='Limpar' onClick={handleClear} />
            

            {showPrimeList && (
                
                <PrimeList
                    number={primeData.number}
                    primes={primeData.primes}
                    execution_time={primeData.execution_time}
                />
            )}
        </>
    );
}

export default PrimeCalculation;