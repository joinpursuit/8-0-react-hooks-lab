import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  let [numPets, setNumPets] = useState(0);
  const petAdd = () => {setNumPets(++numPets)}
  const removePet = () => {
    numPets = (numPets > 0 ? --numPets : 0);
    setNumPets(numPets);
  } 
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numPets}</h5>
        <div>
          <button id="less" onClick={removePet}>-</button>
          <button id="more" onClick={petAdd}>+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
