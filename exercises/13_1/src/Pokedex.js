import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pocketMonsters } = this.props;
    return (
      
      <Pokemon key={pocketMonsters.id} pokemons={pocketMonsters} />
    );
  }
}

export default Pokedex;