import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newPokemon = {
      name,
      hp, 
      sprites: {
        front,
        back
      }
    };

    addPokemon(newPokemon);
    setName("");
    setHp("");
    setFront("");
    setBack("");
  }

  function addPokemon(pokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    })
    .then(response => response.json())
    .then(data => {
      onAddPokemon(data)
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={hp}
            onChange={(event) => setHp(event.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(event) => setFront(event.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={(event) => setBack(event.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
