import React from 'react';
import './NumberOfPets.css';

const NumberOfPets = ({ setNumOfPets, numOfPets }) => {
  const decrementNum = () => {
    if (numOfPets === 0) return;
    setNumOfPets(--numOfPets);
  };

  const incrementNum = () => {
    setNumOfPets(++numOfPets);
  };
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={decrementNum}>
          -
        </button>
        <button id="more" onClick={incrementNum}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
