import React, { useState } from "react";
import "./NumberOfPets.css";

export default function NumberOfPets() {
  const [numOfPets, setNumOfPets] = useState(0);

  const petAdder = () => {
    setNumOfPets(numOfPets + 1);
  };

  const petReducer = () => {
    if (numOfPets === 0) {
      return numOfPets;
    } else {
      setNumOfPets(numOfPets - 1);
    }
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button onClick={petReducer} id="less">
          -
        </button>
        <button onClick={petAdder} id="more">
          +
        </button>
      </div>
    </section>
  );
}
