import React, {useState} from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirstPet] = useState(false);
  const checkbox = () => { setFirstPet(!firstPet)};
  
  return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange={checkbox} />
        </form>
        <h5>{firstPet ? "Yes" : "No"}</h5>
      </section>
    );
}

export default FirstPet;
