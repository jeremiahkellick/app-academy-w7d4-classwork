import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <section className="pokedex">
      <PokemonIndexContainer />
    </section>
  </Provider>
);

export default Root;
