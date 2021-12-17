import React from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>numOfPets</h5>
        <div>
          <button id="less">-</button>
          <button id="more">+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
