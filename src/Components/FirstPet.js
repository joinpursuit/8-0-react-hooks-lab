import React from "react";
import "./FirstPet.css";
import { useState } from "react";

const FirstPet = () => {
  const [isChecked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!isChecked);
  };
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={handleChecked} />
      </form>
      <h5>{isChecked ? "Yes" : "No"}</h5>
    </section>
  );
};

export default FirstPet;
