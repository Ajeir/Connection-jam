import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function Tindercards() {
  const [people, setPeople] = useState([
    {
      name: "The Right Honourable Robyn Rihanna Fenty ",
      url: "https://cdnn1.img.sputniknews.com/img/07e5/0b/1e/1091130290_0:0:3072:1728_1920x0_80_0_0_65c2355dd6041f318094aaaf35f688fa.jpg",
    },

    {
      name: "Hon Brogad",
      url: "https://www.jamaicaobserver.com/apps/pbcsi.dll/storyimage/JO/20151118/ARTICLE/311189926/AR/0/AR-311189926.jpg&maxh=332&maxw=504",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "You have left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up, down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3> <b>{person.name}</b></h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Tindercards;
