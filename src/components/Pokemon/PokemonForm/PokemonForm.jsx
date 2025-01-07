import { Component } from 'react';
import { MdFindInPage } from 'react-icons/md';

import { toast } from 'react-toastify';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  onChangeName = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  submitForm = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast('Введіть імʼя покемону'); // це виклик нотіфікашки за доп бібліотеки
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.onChangeName}
        />
        <button type="submit">
          <MdFindInPage />
          Пошук
        </button>
      </form>
    );
  }
}

export { PokemonForm };
