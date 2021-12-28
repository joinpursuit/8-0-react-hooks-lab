import "./NumberOfPets.css";
import React, { useState } from "react";

const NumberOfPets = () => {
  const [petCount, setPetCount] = useState(1);

  let handleClick = (event) => {
    //setPetCount(event.target.id === "more" ? petCount + 1 : petCount - 1);

    //if(event.target.id === "more"){
    //setPetCount(petCount + 1)
    //}else{
    //setPetCount(petCount - 1)
    //}
    //

    setPetCount(petCount + (event.target.id === "more" ? 1 : -1));
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{petCount}</h5>
      <div>
        <button id="less" onClick={handleClick}>
          -
        </button>

        <button id="more" onClick={handleClick}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
