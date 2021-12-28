import React from "react";
import "./NumberOfPets.css";
import { useState } from "react"

const NumberOfPets = () => {
  const [numOfPets, setNumOfPets] = useState(0)

  const handleIncrease = () => {
    if(numOfPets >= 0) {
      setNumOfPets(numOfPets + 1)
    }
  }

  const handleDecrease = () => {
    if(numOfPets > 0) {
      setNumOfPets(numOfPets - 1)
    }
  }
 
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numOfPets}</h5>
        <div>
          <button id="less" onClick={handleDecrease}>-</button>
          <button id="more" onClick={handleIncrease}>+</button>
        </div>
      </section>
    );
  }
  /* const handleClick = (event) => {
    setPetCount(event.target.id === "more" ? petCount + 1 : petCount - 1)
  }
  THIS CODE WILL LET YOU USE THE SAME METHOD ON DIFFERENT BUTTONS
  */

export default NumberOfPets;
