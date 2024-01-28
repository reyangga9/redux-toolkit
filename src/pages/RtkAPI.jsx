import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTemp, setPokemonTemp] = useState("");
  const counter = useSelector((state) => state.counter.value);

  const handleSearch = (e) => {
    e.preventDefault();
    setPokemonTemp(pokemonName);
  };

  return (
    <div className="m-4 w-full max-w-xs  bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <h1 className=" mb-8">Redux Toolkit Query for API</h1>
      <h1>This is example for state management all state : {counter}</h1>
      <form id="pokemonSearch" onSubmit={handleSearch}>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="pokemon"
          >
            Search Pokemon:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pokemon"
            type="text"
            placeholder="pokemon"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search
        </button>
      </form>
      <PokemonCard pokemon={pokemonTemp} />
    </div>
  );
};

export default PokemonSearch;
