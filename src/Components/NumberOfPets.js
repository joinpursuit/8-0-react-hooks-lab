// import React from "react";
import "./NumberOfPets.css";
import { useState } from 'react';

const NumberOfPets = () => {
  const [ numOfPets , setNumOfPets ] = useState(0)

const addPet = () => {
setNumOfPets(numOfPets + 1);
  }


const  subtractPet = () => {
  if (numOfPets < 1 ) return; 
setNumOfPets(numOfPets - 1);
}



    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numOfPets}</h5>
        <div>
          <button id="less" onClick={subtractPet}>-</button>
          <button id="more"onClick={addPet}>+</button>
        </div>
      </section>
    );
  }


export default NumberOfPets;
