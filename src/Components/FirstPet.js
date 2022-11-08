import { React, useState } from "react";
import "./FirstPet.css";

export default function FirstPet() {
  const [isFirstPet, setIsFirstPet] = useState(false);
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={() => setIsFirstPet(!isFirstPet)} />
      </form>
      <h5>{isFirstPet ? "Yes" : "No"}</h5>
    </section>
  );
}
