import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../stores/pokemonApi";

const PokemonCard = ({ pokemon }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);
  return (
    <div className="w-64 m-4 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && data.species && (
        <>
          <div key={data.id}>
            {isLoading ? (
              <div
                className="skeleton-loading"
                style={{ height: "200px" }}
              ></div>
            ) : (
              <>
                <div className="h-50">
                  <img
                    className="w-full h-full"
                    src={data.sprites.front_shiny}
                    alt={data.species.name}
                  />
                </div>
                <p className="mt-2 text-lg font-semibold font-montserrat">
                  {data.species.name}
                </p>
              </>
            )}
          </div>
          <button
            // onClick={() => handleButtonClick(data._id)}
            className="font-montserrat mt-5 py-2 text-white w-full mx-auto bg-blue-900 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
          >
            Learn More
          </button>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
