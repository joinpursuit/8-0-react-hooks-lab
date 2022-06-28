import { useState } from "react";
import "./NumberOfPets.css";

function NumberOfPets() {
  const [numOfPets, setNumOfPets] = useState(0);

  const numOfPetsHandler = (operation) => {
    if (operation === "increment") {
      setNumOfPets(numOfPets + 1);
    } else if (operation === "decrement") {
      if (numOfPets > 0) {
        setNumOfPets(numOfPets - 1);
      }
    }
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets < 0 ? 0 : numOfPets}</h5>
      <div>
        <button id="less" onClick={() => numOfPetsHandler("decrement")}>
          -
        </button>
        <button id="more" onClick={() => numOfPetsHandler("increment")}>
          +
        </button>
      </div>
    </section>
  );
}

export default NumberOfPets;
