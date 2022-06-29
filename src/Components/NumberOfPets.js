import { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numberOfPets, setNumberOfPets] = useState(0);

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>numOfPets: {numberOfPets}</h5>
      <div>
        <button
          id="less"
          onClick={() => {
            setNumberOfPets(numberOfPets > 0 ? numberOfPets - 1 : numberOfPets);
          }}
        >
          -
        </button>
        <button
          id="more"
          onClick={() => {
            setNumberOfPets(numberOfPets + 1);
          }}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
