import { AiOutlineMeh } from 'react-icons/ai';
import css from './DownloadComponent.module.css';
import pendingImg from 'istockphoto-1398132096-612x612.jpg';

import { PokemonDataView } from '../PokemonDataView/PokemonDataView';

function DownloadComponent({ pokemonName }) {
  const pokemonInfo = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImg,
        },
      },
    },
    stats: [],
  };

  return (
    <div>
      <div className="">
        <AiOutlineMeh size="38" className={css.iconSpin} />
        Завантажуєм...
      </div>
      <PokemonDataView pokemon={pokemonInfo} />
    </div>
  );
}

export { DownloadComponent };
