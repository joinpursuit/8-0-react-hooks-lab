import React from "react";
import "./FirstPet.css";
import { useState } from "react";

const FirstPet = () => {
  
  const [isFirstPet, setIsFirstPet] = useState(false);

  const handleClick = () => {
    setIsFirstPet(!isFirstPet);
  }

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={handleClick} />
      </form>
      <h5>{isFirstPet ? "Yes" : "No"}</h5>
    </section>
  );
}

export default FirstPet;
