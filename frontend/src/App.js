import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React, { useEffect, useState } from 'react';
import CalculatorCard from "./components/CalculatorCard";
import HistoryCard from "./components/HistoryCard";
import './App.css'

function App() {
  const [previousNumbers, setPreviousNumbers] = useState([]);

  const handleHistory = (previousNumber) => {
    setPreviousNumbers([...previousNumbers, previousNumber]);
  }

  // Fetch data when load
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('history'));
    if (history) {
      setPreviousNumbers(history)
    }
  }, []);

  useEffect(() => {
    if (previousNumbers.length > 0 ) {
     localStorage.setItem('history', JSON.stringify(previousNumbers));
    }
  }, [previousNumbers]);

  return (
    <div className="App">
        <Header title='Calculadora de Primos_'/>
        <div id="content">
          <CalculatorCard title='Esse sistema calcula a quantidade de números primos menores do que o número que você digitar'
             handleHistory={handleHistory} />
          <HistoryCard title="Histórico de números" previousNumbers={previousNumbers} />
        </div>
        <Footer />
    </div>
  );
}

export default App;
