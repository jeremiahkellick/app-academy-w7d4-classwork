import React from 'react';
import ItemIndex from '../items/item_index';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }

  render () {
    const pokemon = this.props.pokemon;
    const items = this.props.items;
    if (pokemon !== undefined && pokemon.moves !== undefined) {
      return (
        <div className="detail">
          <figure><img src={pokemon.image_url} /></figure>
          <h2>{pokemon.name}</h2>
          <ul>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: {pokemon.moves.join(', ')}</li>
          </ul><br />
          <ItemIndex items={items}/>
        </div>
      );
    } else {
      return <div id="loading-pokeball-container">
              <div id="loading-pokeball"></div>
            </div>
  ;
    }
  }
}

export default PokemonDetail;
