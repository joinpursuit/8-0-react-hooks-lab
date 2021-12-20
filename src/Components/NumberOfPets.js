import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  let [numOfPets, setNumOfPets] = useState(0);

  const handleAddPet = () => { 
    setNumOfPets(++numOfPets) 
  }

  const handleMinusPet = () => {
    if(numOfPets > 0) {
      numOfPets = --numOfPets;
    } 
    setNumOfPets(numOfPets)
  }

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={handleMinusPet}>-</button>
        <button id="more" onClick={handleAddPet}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;
