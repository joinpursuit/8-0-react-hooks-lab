import React, { useState } from "react";
import "./FirstPet.css";

export default function FirstPet() {
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const handleClick = () => {
    setCheckBoxStatus(!checkBoxStatus);
  };

  const showText = () => {
    if (checkBoxStatus) {
      return "Yes";
    } else {
      return "No";
    }
  };

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input onClick={handleClick} type="checkbox" />
      </form>
      <h5>{showText()}</h5>
    </section>
  );
}

