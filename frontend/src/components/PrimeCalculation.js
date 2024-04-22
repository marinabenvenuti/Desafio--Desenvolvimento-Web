import React, { useState } from "react";
import Buttonn from "./Button";
import Input from "./Input";
import api from '../api.js';
import PrimeList from "./PrimeList.js";


function PrimeCalculation() {
    const [number, setNumber] = useState();
    const [primeData, setPrimeData] = useState(null);
    const [showPrimeList, setShowPrimeList] = useState(false);
    const [storage, setStorage] = useState([]);

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const handleClick = () => {
        const num = parseInt(number);
        console.log(number);
        console.log('Número:', num);
        if (isNaN(num)) {
            alert('Digite um número antes de enviar');
        } else if(num <= 0 || num>100000){
            alert('Número inválido. Digite um número maior que 0 e menor que 100.000');
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
                primes: response.data.primeNumbers,
                execution_time: response.data.executionTime
            };
            setPrimeData(newPrimeData);
            setShowPrimeList(true);
            addToStorage(primeData);


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

    const addToStorage = (primeData) => {
        setStorage([...storage, primeData]);
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
