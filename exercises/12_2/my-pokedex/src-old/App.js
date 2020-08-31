import React from 'react';
// import logo from './logo.svg';
import './App.css';
import pokemonsData from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <div><h1>Pokedex</h1></div>
      <div className="pokedex"><Pokedex pocketMonsters = {pokemonsData} /></div>
    </div>
  );
}

export default App;
