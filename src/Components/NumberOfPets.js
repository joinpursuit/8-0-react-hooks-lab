import React from "react";
import "./NumberOfPets.css";
import { useState } from 'react'

const NumberOfPets = () => {

  const [numOfPets, setNumOfPets] = useState(0);

  const petCounter = (event) => {
    if (event === "increase") {
      setNumOfPets(numOfPets + 1);
    } else if (event === "decrease") {
      setNumOfPets(numOfPets - 1)
    }
  }

    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numOfPets < 1 ? 0 : numOfPets}</h5>
        <div>
          <button id="less" onClick={() => petCounter("decrease")}>-</button>
          <button id="more" onClick={() => petCounter ("increase")}>+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
