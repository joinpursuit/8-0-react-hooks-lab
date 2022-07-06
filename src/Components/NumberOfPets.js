import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [ numOfPets, setNumOfpets ] = useState(1)

  return (
    <section className="num-of-pets container">
      <h4>Number of Pets</h4>
      
      <div className="button">
        <button id="less" onClick={() => setNumOfpets(numOfPets - 1)}>-</button>
        <h5>{numOfPets}</h5>
        <button id="more" onClick={() => setNumOfpets(numOfPets + 1)}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;