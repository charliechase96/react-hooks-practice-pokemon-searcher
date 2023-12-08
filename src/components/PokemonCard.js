import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(poke) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Card >
      <div>
        <div className="image">
          <img onClick={handleClick} src={isClicked ? poke.poke.sprites.back : poke.poke.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{poke.poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
