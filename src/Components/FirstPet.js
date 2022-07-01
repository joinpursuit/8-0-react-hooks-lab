import React from "react";
import "./FirstPet.css";
import { useState } from 'react'


//const [checkedPet, setCheckedPet] useState[(false)]



const FirstPet = () => {

const [ checkedPet , setCheckedPet ] = useState(false)


    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input onClick={() => setCheckedPet(!checkedPet)} type="checkbox"/>
        </form>
        <h5>{checkedPet ? "Yes" : "No"}</h5>
      </section>
    );
  }

export default FirstPet;
