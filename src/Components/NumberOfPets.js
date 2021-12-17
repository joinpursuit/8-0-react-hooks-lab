import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numOfPets, setNumOfPets] = useState(0);

  const handleMinus = () => {
    if (numOfPets > 0) {
      setNumOfPets(numOfPets - 1);
    }
  };

  const handlePlus = () => {
    setNumOfPets(numOfPets + 1);
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={handleMinus}>
          -
        </button>
        <button id="more" onClick={handlePlus}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
