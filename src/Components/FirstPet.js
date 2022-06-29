import { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirstPet] = useState(false);

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input
          type="checkbox"
          checked={firstPet}
          onChange={() => setFirstPet(!firstPet)}
        />
      </form>
      <h5>{firstPet ? "Yes" : "No"}</h5>
    </section>
  );
};

export default FirstPet;
