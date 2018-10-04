import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon } from '../../actions/pokemon_actions';
import { clearErrors } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  errors: state.ui.errors
});

const mapDispatchToProps = dispatch => ({
  createPokemon: (data) => dispatch(createPokemon(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
