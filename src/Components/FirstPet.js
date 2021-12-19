import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setPet] = useState(false);

  let checkBox = () => {
    setPet(!firstPet);
  };

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onChange={checkBox} />
      </form>
      <h5>{firstPet ? "Yes" : "No"}</h5>
    </section>
  );
};

export default FirstPet;
