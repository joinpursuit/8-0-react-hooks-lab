import React, { useState } from 'react';
import './NumberOfPets.css';

const NumberOfPets = () => {
  const [petNumbers, setPetNumbers] = useState(0);

  const increasePetNumbers = () => {
    setPetNumbers(petNumbers + 1);
  };

  const decreasePetNumbers = () => {
    if (petNumbers > 0) {
      setPetNumbers(petNumbers - 1);
    }
  };

  return (
    <section className='num-of-pets'>
      <h4>Number of Pets</h4>
      <h5>{petNumbers}</h5>
      <div>
        <button id='less' value='minus' onClick={decreasePetNumbers}>
          -
        </button>
        <button id='more' value='plus' onClick={increasePetNumbers}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
