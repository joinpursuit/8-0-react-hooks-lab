import React from "react";
import "./NumberOfPets.css";

export default function NumberOfPets({ numOfPets, setNumOfPets }) {
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={() => numOfPets > 0 ? setNumOfPets(numOfPets - 1) : setNumOfPets(0)}>-</button>
        <button id="more" onClick={() => setNumOfPets(numOfPets + 1)}>+</button>
      </div>
    </section>
  );
}

