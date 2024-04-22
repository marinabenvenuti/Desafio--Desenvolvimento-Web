import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cards from "./components/Card";
import React from 'react';
import PrimeCalculation from "./components/PrimeCalculation";

function App() {
  return (
    <div className="App">
        <Header title='Números Primos' link='Histórico de números'/>
        <Cards title='Esse sistema calcula todos os números primos menores do que o número que você digitar' comp={PrimeCalculation}/>
        <Footer />
    </div>
  );
}

export default App;
