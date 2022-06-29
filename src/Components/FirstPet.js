import React, {useState} from "react";
import "./FirstPet.css";


export default function FirstPet() {
  const [firstPet, setFirstPet ] = useState(false)


 const handleClick = () => {
  firstPet ? setFirstPet(false) : setFirstPet(true)
 }


return (
    <section className="first-pet">
    <h4>Is this your first pet?</h4>
    <br />
    <form>
      <input onClick={handleClick} type="checkbox" />
    </form>
    <h5>{firstPet ? "Yes" : 'No'}</h5>
  </section>
  )
}
