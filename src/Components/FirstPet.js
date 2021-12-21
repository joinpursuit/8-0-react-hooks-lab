import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirstPet] = useState(false);

  const checkBox = () => {
    setFirstPet(!firstPet); //toggle
  };
  console.log(firstPet);

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input onClick={checkBox} type="checkbox" />
      </form>
      <h5>{!firstPet ? "No" : "Yes"}</h5>
    </section>
  );
};

export default FirstPet;
