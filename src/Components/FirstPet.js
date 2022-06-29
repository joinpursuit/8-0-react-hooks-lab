import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {

  const [check, setCheck] = useState('No');
  const [isChecked, setIsChecked] = useState(false);

const handleCheck = (event) =>{
 if(event.target.checked) {
  setCheck("Yes")
 } else {
  setCheck("No")
 }
}

    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input onClick={handleCheck} type="checkbox" value={isChecked}/>
        </form>
        <h5>{check}</h5>
      </section>
    );
}

export default FirstPet;
