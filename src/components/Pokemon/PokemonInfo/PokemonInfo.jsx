import { Component } from 'react';
import { toast } from 'react-toastify';

import { ErrorComponent } from './ErrorComponent/ErrorComponent';
import { DownloadComponent } from './DownloadComponent/DownloadComponent';
import { StartComponent } from './StartComponent/StartComponent';
import { PokemonDataView } from './PokemonDataView/PokemonDataView';

import axios from 'axios';

class PokemonInfo extends Component {
  state = {
    pokemonInfo: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

      this.setState({ status: 'pending' });

      fetch(`${BASE_URL}/${this.props.pokemonName}`)
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(
            new Error(
              `Все пропало покемона з імʼям ${this.props.pokemonName} не існує`
            )
          );
        })
        .then(pokemon =>
          this.setState({ pokemonInfo: pokemon, status: 'resolved' })
        )
        .catch(error => this.setState({ error: error, status: 'rejected' }));
      //   .finally(this.setState({ status: 'pending' }));
    }
  }

  render() {
    const { pokemonInfo, error, status } = this.state;

    if (status === 'idle') {
      return <StartComponent />;
    }

    if (status === 'pending') {
      return <DownloadComponent pokemonName={this.props.pokemonName} />;
    }

    if (status === 'rejected') {
      return <ErrorComponent message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemonInfo} />;
    }
  }
}

export { PokemonInfo };
