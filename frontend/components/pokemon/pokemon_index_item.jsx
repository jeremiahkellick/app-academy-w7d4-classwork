import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => (
  <li className="pokemon-index-item">
    {pokemon.id}
    <div className="thumbnail"><img src={pokemon.image_url}/></div>
    {pokemon.name}
  </li>
);

export default PokemonIndexItem;
