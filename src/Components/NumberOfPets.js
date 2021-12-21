import "./NumberOfPets.css";
import { useState } from "react";

const NumberOfPets = () => {
  const [NumberOfPets, setNumberOfPets] = useState(0);
  let handlePlus = () => {
    setNumberOfPets(NumberOfPets + 1);
  };
  let handleMinus = () => {
    if (NumberOfPets > 0) {
      setNumberOfPets(NumberOfPets - 1);
    }
  };
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{NumberOfPets}</h5>
      <div>
        <button id="less" value="-" onClick={handleMinus}>
          -
        </button>
        <button id="more" value="+" onClick={handlePlus}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
