function PokemonDataView({ pokemonName, pokemonPic }) {
  return (
    <div>
      <p>{pokemonName}</p>
      <img src={pokemonPic} alt={pokemonName} width="240" />
    </div>
  );
}

export { PokemonDataView };
