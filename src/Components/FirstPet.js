import "./FirstPet.css";
import React from 'react'
import {useState} from 'react'



const FirstPet = () => {

  const [firstPet, setFirstPet] = useState(false)
  
  const handleChange = () => {
    setFirstPet(!firstPet)

  }






  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input onChange={handleChange} type="checkbox" />
      </form>
      <h5>{firstPet ? 'Yes' : 'No'}</h5>
    </section>
  );
}

export default FirstPet
