import React, { useState } from 'react';
import { getPokemon } from '../services/PokeService';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = async () => {
    const data = await getPokemon(pokemonName.toLowerCase());
    setPokemon(data);
  };

  return (
    <div className="container text-center">
      <h1 className="mt-4">Pokédex</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Pokémon Name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button className="btn btn-primary mb-3" onClick={handleSearch}>Search</button>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default Home;