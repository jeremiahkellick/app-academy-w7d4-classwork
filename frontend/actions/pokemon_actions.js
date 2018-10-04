import * as APIUtil from '../util/api_util';
import { receiveErrors } from './ui_actions';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = (pokemon, items) => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon,
  items
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchSinglePokemon(id)
    .then(res => dispatch(receiveSinglePokemon(res.pokemon, res.items)))
);

export const createPokemon = data => dispatch => (
  APIUtil.createPokemonRequest(data)
    .then(
      res => dispatch(receiveSinglePokemon(res.pokemon, res.items)),
      res => dispatch(receiveErrors(res.responseJSON))
    )
);
