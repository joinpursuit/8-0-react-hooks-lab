import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [petsNum, setPetsNum] = useState(0);

  function handleMinusClick() {
    return petsNum <= 0 ? null : setPetsNum(petsNum - 1);
  }

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{petsNum}</h5>
      <div>
        <button id="less" onClick={handleMinusClick}>
          -
        </button>
        <button id="more" onClick={() => setPetsNum(petsNum + 1)}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
