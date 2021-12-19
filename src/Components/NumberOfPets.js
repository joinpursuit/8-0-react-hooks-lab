import React from "react";
import "./NumberOfPets.css";
import { useState } from "react"

const NumberOfPets = () => {
  const [numOfPets, setNumOfPets] = useState(0);
  
  const subtract = () => {
    setNumOfPets(
      numOfPets === 0 ? 0 : numOfPets - 1
    )
  }

  const add = () => {
    setNumOfPets(numOfPets + 1)
  }
  
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={subtract}>-</button>
        <button id="more" onClick={add}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;
