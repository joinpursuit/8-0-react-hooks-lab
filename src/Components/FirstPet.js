import React from "react";
import "./FirstPet.css";
import { useState } from 'react';

const FirstPet = () => {
const [ isFirstPet, setIsFirstPet ] = useState(false)

const handleChange = () => {
setIsFirstPet(!isFirstPet)
}

    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange={handleChange}/>
        </form>
        <h5>{isFirstPet ? <p>Yes</p> : <p>No</p>}</h5>
      </section>
    );
  }


export default FirstPet;
