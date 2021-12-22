import React, { useState } from "react";
import "./FirstPet.css";

function FirstPet() {
  const [ pets, setPets ] = useState(false);
  // error: cannot read prop of null,bool not iterable --fixed with !, ((false)))
  const handleCheckboxChange = () => {
      setPets(!pets)
    }
    
    return (
      <section className="first-pet">

        <h4>Is this your first pet?</h4>
        <br />

        <form>
          <input onChange={ handleCheckboxChange } type="checkbox" />
        </form>

        <h5>
          { pets ? "Yes" : "No" }
        </h5>
      </section>
    );
  }


export default FirstPet;
