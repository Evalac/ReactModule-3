import axios from 'axios';
import { ToastContainer } from 'react-toastify';

import { Component } from 'react';

import { PokemonForm } from './PokemonForm/PokemonForm';
import { PokemonInfo } from './PkemonInfo/PokemonInfo';

class PokemonMainApp extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmit = pokemon => {
    console.log(pokemon);
    this.setState({ pokemonName: pokemon });
  };

  render() {
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer position="top-left" />
      </div>
    );
  }
}

export { PokemonMainApp };
