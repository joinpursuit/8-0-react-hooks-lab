import React, { useState, useEffect } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
const [numPets, setNumPets] = useState(0)


const handleMinus = () => {
  setNumPets(numPets - 1)

  if(numPets <= 0){
    setNumPets(0)
  }
}

const handlePlus = () => {
setNumPets(numPets + 1)
}


    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>numOfPets</h5>
        <div>
          <button onClick={handleMinus} id="less">-</button>
          <p>{numPets}</p>
          <button onClick={handlePlus} id="more">+</button>
        </div>
      </section>
    );
  }


export default NumberOfPets;
