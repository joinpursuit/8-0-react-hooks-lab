import React from "react";
import { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirst] = useState(false);

  const handlePet = (e) => {
    return setFirst(!firstPet);
  };

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" value={firstPet} onChange={handlePet} />
      </form>
      <h5>{!firstPet ? "No" : "Yes"}</h5>
    </section>
  );
};

export default FirstPet;
