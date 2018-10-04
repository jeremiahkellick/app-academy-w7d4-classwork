import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Link} from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="sidebar">
        {this.props.pokemon.map(pokemon =>
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <PokemonIndexItem pokemon={pokemon} />
          </Link>
        )}
      </ul>
    );
  }
}

export default PokemonIndex;
