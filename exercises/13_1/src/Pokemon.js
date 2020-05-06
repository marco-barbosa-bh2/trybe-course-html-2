import React from 'react';
import './Pokemon.css';

class Pokemons extends React.Component {
  render() {
    const { id, name, type,averageWeight:{value, measurementUnit} ,image } = this.props.pokemons;
    return (
    <div className="list">
      <div>{name} <br />{type} <br />{value} {measurementUnit}</div>
      <div><img src={image} /></div>
    </div>
    );
  }
}

export default Pokemons;