import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  let [numOfPets, setNumOfPets] = useState(0);

  const handleAddPet = () => { setNumOfPets(++numOfPets) }

  const handleRemovePet = () => { 
    numOfPets = (numOfPets > 0 ? --numOfPets : 0);
    setNumOfPets(numOfPets);
  }

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={handleRemovePet}>-</button>
        <button id="more" onClick={handleAddPet}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;
