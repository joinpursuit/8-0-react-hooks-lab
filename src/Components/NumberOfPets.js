import { React, useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [pets, setPets] = useState(0);

  const noNegative = (num) => {
    while (num > 0) {
      num--;
      return num;
    }
    return num;
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{pets}</h5>
      <div>
        <button onClick={() => setPets(noNegative(pets))} id="less">
          -
        </button>
        <button onClick={() => setPets(pets + 1)} id="more">
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
