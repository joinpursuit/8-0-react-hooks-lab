import React, { useState } from "react";
import "./NumberOfPets.css";

function NumberOfPets() {
  let [ numberOfPets, setNumberOfPets ] = useState(0);

  const handleMinusPet = () => {
    numberOfPets = (numberOfPets > 0 ? --numberOfPets : 0);
    setNumberOfPets(numberOfPets);
  }

  const handleAddPet = () => { setNumberOfPets(++numberOfPets) }


  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numberOfPets}</h5>
      <div>
        <button id="less" onClick={handleMinusPet}>-</button>
        <button id="more" onClick={handleAddPet}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;
