import React from "react";

function Search({pokemonData, onPokemonFilter, searchTerm, setSearchTerm}) {

  function handleSearchChange(event) {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    
    const filtered = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    onPokemonFilter(filtered);
  };



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchTerm} onChange={handleSearchChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
