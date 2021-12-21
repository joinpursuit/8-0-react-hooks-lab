import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numPets, setNumPets] = useState(0);

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numPets}</h5>
      <div>
        <button
          id="less"
          onClick={() => {
            if (numPets > 0) {
              setNumPets(numPets - 1);
            }
          }}
        >
          -
        </button>
        <button
          id="more"
          onClick={() => {
            setNumPets(numPets + 1);
          }}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
