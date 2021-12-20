import { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numOfPets, setNumOfPets] = useState(0);

  const handleAddition = () => {
    if (numOfPets >= 0) {
      setNumOfPets(numOfPets + 1);
    }
  };
  const handleDeduction = () => {
    if (numOfPets > 0) {
      setNumOfPets(numOfPets - 1);
    }
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={handleDeduction}>
          -
        </button>
        <button id="more" onClick={handleAddition}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
