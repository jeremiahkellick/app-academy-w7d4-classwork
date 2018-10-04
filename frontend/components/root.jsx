import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="pokedex">
        <Route path="/" component={PokemonIndexContainer} />
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
        <Route path="/new" component={PokemonFormContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
