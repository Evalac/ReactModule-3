function PokemonDataView({ pokemon }) {
  console.log(pokemon);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="pokemonName"
        width="240"
      />
      <ul>
        {pokemon.stats.map(entry => {
          console.log(entry);
          return (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { PokemonDataView };
