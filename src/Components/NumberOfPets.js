import React, { useState } from "react";
import "./NumberOfPets.css";

export default function NumberOfPets() {
  const [ count, setCount ] = useState(0);

  const handleIncrement = () => {setCount(count + 1)}

  const handleDecrement = () => {setCount(count <= 0 ? count : count - 1)}

  return (
    <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{count}</h5>
        <div>
          <button id="less" onClick={handleDecrement}>-</button>
          <button id="more" onClick={handleIncrement}>+</button>
        </div>
    </section>
  )
}
