import React from 'react';
// import logo from './logo.svg';
import './App.css';
import pokemonsData from './data';
import Pokedex from './Pokedex';

class MyButton extends React.Component {
  render() {
    return <button onClick={() => this.props.handleClick()} >{this.props.label}</button>
  }
}

// let cnt = 0;
let pokeData = pokemonsData;

// const increment = () => {
//   (cnt < pokeData.length - 1) ? cnt += 1 :cnt = 0;
//   return cnt;
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      type: 'Fire',
    };
  }

  nextPokemon = () => {
    if(this.state.counter < pokeData.length - 1) {
      this.setState((state, props) => ({
        counter: state.counter + 1,
      }))
    }
    else {
      this.setState((state, props) => ({
        counter: 0,
      }))
    }
  }
  
  filtered = () => {
    pokeData = (this.state.type) ? pokemonsData.filter(({type}) => type === this.state.type) : pokemonsData;
  }

  changeType = (pType) => {
    this.setState((state, props) => ({
      type: pType,
    }), this.filtered);

    this.setState((state, props) => ({
      counter: 0,
    }));
  }

  render() {
    this.filtered();
    return (
      <div className="App">
        <div><h1>Pokedex</h1></div>
        <div className="pokedex"><Pokedex pocketMonsters = {pokeData[this.state.counter]} /></div>
        <MyButton label='Próximo Pokemón' handleClick={this.nextPokemon} />
        <br />
        <MyButton label='Psychic' handleClick={() => {this.changeType('Psychic')}} />
        <MyButton label='Fire' handleClick={() => {this.changeType('Fire')}} />
      </div>
    );
  }
}

export default App;
