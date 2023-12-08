import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addNewPokemon(newPokemon) {
    setPokemonData([...pokemonData, newPokemon]);
  };

  function handleFilteredPokemon(pokemon) {
    setFilteredPokemon(pokemon);
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => setPokemonData(data))
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addNewPokemon} />
      <br />
      <Search 
        onPokemonFilter={handleFilteredPokemon} 
        pokemonData={pokemonData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <br />
      <PokemonCollection 
        filteredPokemon={filteredPokemon.length > 0 ? filteredPokemon : pokemonData}
      />
    </Container>
  );
}

export default PokemonPage;
