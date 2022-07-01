import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [ numOfPets, setNumOfpets ] = useState(1)

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={() => setNumOfpets(numOfPets - 1)}>-</button>
        <button id="more" onClick={() => setNumOfpets(numOfPets + 1)}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;