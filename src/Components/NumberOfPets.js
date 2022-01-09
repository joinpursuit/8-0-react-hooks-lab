import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  let [numberOfPets, setNumberOfPets] = useState(0);
  let handleAdd = () => {
    setNumberOfPets(numberOfPets + 1)
  };
  let handleSubtract = () => {
    if(numberOfPets > 0){
      setNumberOfPets(numberOfPets - 1)
    }
  };
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numberOfPets}</h5>
        <div>
          <button id="less" onClick={handleSubtract}>-</button>
          <button id="more" onClick={handleAdd}>+</button>
        </div>
      </section>
    );
  }

export default NumberOfPets