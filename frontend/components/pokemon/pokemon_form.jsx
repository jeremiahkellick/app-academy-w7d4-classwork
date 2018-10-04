import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "type",
      image_url: "",
      move1: "",
      move2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.types = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ];
  }

  handleSubmit(e){
    e.preventDefault();
    const data = Object.assign({}, this.state);
    delete data.move1;
    delete data.move2;
    data.moves = [this.state.move1, this.state.move2];
    this.props.createPokemon(data)
      .then(res => this.props.history.push(`/pokemon/${res.pokemon.id}`));
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render () {
    return (
      <form onSubmit= {this.handleSubmit}>
        <ul>
          {
            this.props.errors.map(error => <li>{error}</li>)
          }
        </ul>
        <input
          type='text'
          placeholder='Name'
          onChange={ this.update('name')}
          value={this.state.name} />
        <input
          type='text'
          placeholder='Image Url'
          onChange={ this.update('image_url')}
          value={this.state.image_url} />
        <select value={this.state.poke_type} onChange={this.update('poke_type')}>
          <option disabled value="type">Type</option>
          {
            this.types.map(type =>
              <option key={type} value={type}>{type}</option>
            )
          }
        </select>
        <input
          type='text'
          placeholder='Attack'
          onChange={ this.update('attack')}
          value={this.state.attack} />
        <input
          type='text'
          placeholder='Defense'
          onChange={ this.update('defense')}
          value={this.state.defense} />
        <input
          type='text'
          placeholder='Move 1'
          onChange={ this.update('move1')}
          value={this.state.move1} />
        <input
          type='text'
          placeholder='Move 2'
          onChange={ this.update('move2')}
          value={this.state.move2} />
        <input type='submit' value='Create Pokemon'/>
      </form>
    );
  }
}

export default withRouter(PokemonForm);
