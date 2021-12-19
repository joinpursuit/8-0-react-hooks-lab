import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  let [numOfPets, setPet] = useState(0);

  const addPet = () => {
    setPet(++numOfPets);
  };

  const subtractPet = () => {
    numOfPets = numOfPets > 0 ? --numOfPets : 0;
    setPet(numOfPets);
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={subtractPet}>
          -
        </button>
        <button id="more" onClick={addPet}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
