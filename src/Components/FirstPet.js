import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirstPet] = useState(false);
  
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input
          name="first-pet" 
          type="checkbox"
          checked={firstPet}
          onChange={(e) => setFirstPet(e.target.checked)} 
        />
      </form>
      <h5>{firstPet ? 'Yes' : 'No'}</h5>
    </section>
  );
}

export default FirstPet;