import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {

  const [ numOfPets, setNumOfPets ] = useState(0)

  const handleDecrease = () => {
    numOfPets > 0 && setNumOfPets(numOfPets-1)
  }

  const handleIncrease = () => {
    setNumOfPets(numOfPets+1)
  }

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button onClick={handleDecrease}id="less">-</button>
        <button onClick={handleIncrease} id="more">+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;
