import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numberOfPets, setNumber] = useState(0); //setNumber = this.setState...changes numberOfPets

  const incrementByOne = () => {
    setNumber(numberOfPets + 1);
  };

  const decreaseByOne = () => {
    if (numberOfPets < 1) {
      return;
    }
    setNumber(numberOfPets - 1);
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numberOfPets}</h5>
      <div>
        <button onClick={decreaseByOne} id="less">
          -
        </button>
        <button onClick={incrementByOne} id="more">
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
