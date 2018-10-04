import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map(pokemon =>
          <li className="pokemon-index-item" key={pokemon.id}>
            {pokemon.id}
            <div class="thumbnail"><img src={pokemon.image_url}/></div>
            {pokemon.name}
          </li>
        )}
      </ul>
    );
  }
}

export default PokemonIndex;
