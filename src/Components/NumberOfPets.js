import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [count, setCount] = useState(0);

  //if the count is 0, that state remain at 0, when the - button is clicked

  const handleLessButton = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1)
    }
  }
  const handleMoreButton = () => {
    setCount(count + 1)
  }


  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{count}</h5>
      <div>
        <button id="less" onClick={handleLessButton}>-</button>
        <button id="more" onClick={handleMoreButton}>+</button>
      </div>
    </section>
  );
}

export default NumberOfPets;
