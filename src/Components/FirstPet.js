import React, {useState} from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [checked, setChecked]= useState(false)
  
  console.log(checked)

    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange ={()=>{setChecked(!checked)}} />
        </form>
        {checked ?<h5>Yes</h5> : <h5>No</h5>}
      </section>
    );
}

export default FirstPet;
