import React from 'react';
// import logo from './logo.svg';
import './App.css';
import pokemonsData from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App pokedex">
      <h1>Pokedex</h1>
      <Pokedex pocketMonsters = {pokemonsData} />
    </div>
  );
}

export default App;
