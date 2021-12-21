import React from "react";
import { useState } from 'react';
import "./FirstPet.css";

const FirstPet=()=>{
  const [ display, setDisplay ] = useState(true);

  const handleCheckbox=(e)=>{
      setDisplay(e.target.checked)
    }
  
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input 
            type="checkbox" 
            onChange={handleCheckbox}
            checked={display}
          />
        </form>
        <h5>{ display ? "Yes" : "No" }</h5>
      </section>
    );
}

export default FirstPet;
