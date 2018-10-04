export const fetchAllPokemon = () => $.ajax({ url: '/api/pokemon' });
export const fetchSinglePokemon = (id) => $.ajax({url: `/api/pokemon/${id}`});
export const createPokemonRequest = (data) => (
  $.ajax({ method: 'POST', url: '/api/pokemon', data: {pokemon: data} })
);
