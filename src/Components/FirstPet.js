import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [firstPet, setFirstPet] = useState(false)
  //initializing 2 vars with [];
  //first var = state
  //2nd var = function that updates the state
  //parameter for usestate is a boolean
  //use onChange & make a new function [added event listener to input tag]

  const handleCheckBox = () => {
  setFirstPet(!firstPet) //making first pet true
  }

  return (
  <section className="first-pet">
  <h4>Is this your first pet?</h4>
  <br />
  <form>
  <input onChange={handleCheckBox} type="checkbox" />
  </form>
  <h5>{firstPet ? "Yes" : "No"}</h5>
  </section>
    );
//if box is clicked, display no, otherwise yes
}

export default FirstPet;
