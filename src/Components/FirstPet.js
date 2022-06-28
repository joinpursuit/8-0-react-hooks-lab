import React from "react";
import "./FirstPet.css";

export default function FirstPet({ firstPet, setFirstPet }) {
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form >
        <input type="checkbox" onClick={() => setFirstPet(!firstPet)} />
      </form>
      <h5>{firstPet ? 'Yes' : 'No'}</h5>
    </section>
  );

}

