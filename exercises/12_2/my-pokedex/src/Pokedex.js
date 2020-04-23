import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pocketMonsters } = this.props;
    return (
      pocketMonsters.map((pokemons) => <Pokemon key={pokemons.id} pokemons={pokemons} />)
    );
  }
}

export default Pokedex;