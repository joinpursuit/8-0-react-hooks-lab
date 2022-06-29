import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numberOfPets, setNumberOfPets] = useState(0);
  const handleLess =() => {
    setNumberOfPets(numberOfPets-1)
  };

  const handleMore =() => {
    setNumberOfPets(numberOfPets+1)
  };
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numberOfPets}</h5>
        <div>
          <button onClick = {handleLess} id="less">-</button>
          <button onClick = {handleMore} id="more">+</button>
        </div>
      </section>
    );
  }

export default NumberOfPets;
