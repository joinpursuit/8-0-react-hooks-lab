import React, {useState} from "react";
import "./FirstPet.css";
import NumberOfPets from "./NumberOfPets";

const FirstPet = () => {
  
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox"/>
        </form>
        <h5>{NumberOfPets}</h5>
      </section>
    );
  }


export default FirstPet;
