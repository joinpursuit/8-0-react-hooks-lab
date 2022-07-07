import React from "react";
import { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [petNumber, setNumber] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === "less") {
      return setNumber((prev) => {
        if (prev === 0) {
          return 0;
        } else {
          return (prev -= 1);
        }
      });
    }
    if (e.target.id === "more") {
      return setNumber((prev) => {
        return (prev += 1);
      });
    }
  };
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{petNumber}</h5>
      <div>
        <button id="less" onClick={handleClick}>
          -
        </button>
        <button id="more" onClick={handleClick}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
