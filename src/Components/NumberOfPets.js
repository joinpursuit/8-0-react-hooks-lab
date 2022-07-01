import React from 'react';
import './NumberOfPets.css';
import { useState } from 'react';

const NumberOfPets = () => {
  const [numOfPets, setCount] = useState(0);

  const decrementer = () => {
    if (numOfPets > 0) {
      setCount(numOfPets - 1);
    }
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={() => decrementer()}>
          -
        </button>
        <button id="more" onClick={() => setCount(numOfPets + 1)}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
