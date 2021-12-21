import React, { useState } from "react";
import "./FirstPet.css";

function FirstPet() {
  const [answer, setAnswer]= useState('')
  const handleClick =(e)=>{
    const checked = e.target.checked;
    if(checked){
      setAnswer('Yes')
    }else {
      setAnswer('No') 
    }
  }
  
  

  
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox"
                
                onClick ={(e)=>{
                  handleClick(e)
                }}

          />
        </form>
        <h5>{answer}</h5>
      </section>
    );
 } 
  

export default FirstPet;
