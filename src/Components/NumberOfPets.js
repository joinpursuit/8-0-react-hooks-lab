import React from "react";
import { useState } from "react/cjs/react.development";
import "./NumberOfPets.css";

function NumberOfPets(){
const[count,setCount]=useState(0);


const handleIncrement=()=>{
  setCount(count + 1)
}
const handleDecrement=()=>{
  if(count <1){
    setCount(0)
  } else{
    setCount(count-1)
  }
  
}

    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{count}</h5>
        <div>
          <button onClick={handleDecrement} id="less">-</button>
          <button onClick={handleIncrement} id="more">+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
