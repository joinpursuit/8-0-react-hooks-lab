import React from "react";
import "./FirstPet.css";

const FirstPet = () => {
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" />
      </form>
      <h5></h5>
    </section>
  );
};

export default FirstPet;
