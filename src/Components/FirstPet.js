import { useState } from "react";
import "./FirstPet.css";

function FirstPet() {
  const [firstPetBool, setfirstPetBool] = useState(false);

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input onClick={() => setfirstPetBool(!firstPetBool)} type="checkbox" />
      </form>
      <h5>{firstPetBool ? "Yes" : "No"}</h5>
    </section>
  );
}

export default FirstPet;
