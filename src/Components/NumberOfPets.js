import React from "react";
import "./NumberOfPets.css";
import { useState } from 'react';


const NumberOfPets=()=> {
  const [ count, setCount ] = useState(1);
  
  const handleIncrement=()=>{
    setCount(count + 1)
  }

  const handleDecrement=()=>{
    setCount(count - 1)
  }
  
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{ count }</h5>
        <div>
          <button onClick={handleDecrement} id="less">-</button>
          <button onClick={handleIncrement} id="more">+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
