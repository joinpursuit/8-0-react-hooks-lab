import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirstPet ] = useState(false);
  const handleCheck = () => {
    setFirstPet(!firstPet)
  };

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={handleCheck} />
      </form>
      <h5>{firstPet ? "Yes" : "No"}</h5>
    </section>
  );
}

export default FirstPet;
