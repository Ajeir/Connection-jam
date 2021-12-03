import React, { useState } from "react";
import "./TinderCards.css";

function Tindercards() {
  const [people, setPeople] = useState([
    {
      name: "Rihanna",
      url: "https://cdnn1.img.sputniknews.com/img/07e5/0b/1e/1091130290_0:0:3072:1728_1920x0_80_0_0_65c2355dd6041f318094aaaf35f688fa.jpg",
      
    },
  ]);

  return (
    <div className="tinderCards">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default Tindercards;
