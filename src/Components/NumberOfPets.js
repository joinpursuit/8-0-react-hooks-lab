import { React, useState } from "react";
import "./NumberOfPets.css";

export default function NumberOfPets() {
  const [numOfPets, setNumOfPets] = useState(0);

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button
          id="less"
          onClick={() => (numOfPets > 0 ? setNumOfPets(numOfPets - 1) : null)}
        >
          -
        </button>
        <button id="more" onClick={() => setNumOfPets(numOfPets + 1)}>
          +
        </button>
      </div>
    </section>
  );
}
