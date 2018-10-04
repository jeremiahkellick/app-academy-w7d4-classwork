export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectPokemonItems = (state, id) => {
  return Object.values(state.entities.items).filter(
    item => item.pokemon_id === parseInt(id)
  );
};
