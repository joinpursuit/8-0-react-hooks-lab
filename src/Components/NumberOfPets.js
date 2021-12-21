import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets =()=> {

  const [numOfPets, setNumOfPets] = useState(0)

  const addPet = () => {
    setNumOfPets(numOfPets + 1)
  }

  const minusPet = () => {
    if (numOfPets < 1) {
      return;
    }
      setNumOfPets(numOfPets - 1)
  }
  
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button onClick={minusPet}id="less">-</button>
        <button onClick={addPet}id="more">+</button>
      </div>
    </section>
  );

}

export default NumberOfPets;
