import { Component } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';

class PokemonInfo extends Component {
  state = {
    pokemonInfo: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

      this.setState({ loading: true });

      setTimeout(() => {
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
          .then(pokemon => this.setState({ pokemonInfo: pokemon }))
          .catch(error => this.setState({ error: error }))
          .finally(this.setState({ loading: false }));
      }, 1000);
    }
  }

  render() {
    const { loading, pokemonInfo, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {!pokemonName && <p>Введіть імʼя покемона </p>}
        {loading && <p>Завантажуєм...</p>}
        {pokemonInfo && (
          <div>
            <p>{pokemonInfo.name}</p>
            <img
              src={pokemonInfo.sprites.other['official-artwork'].front_default}
              alt={pokemonInfo.name}
              width="240"
            />
          </div>
        )}
      </div>
    );
  }
}

export { PokemonInfo };
