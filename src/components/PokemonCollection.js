import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({filteredPokemon}) {

  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemon.map(poke => 
        (<PokemonCard poke={poke} key={poke.id} />
        ))}
    </Card.Group>
  );
}

export default PokemonCollection;
