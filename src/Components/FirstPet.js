import React, {useState}from "react";
import "./FirstPet.css";


export default function FirstPet() {
  const [checkbox, setCheckBox] = useState(false)

const handleCheckbox = () => {
 setCheckBox(!checkbox)

}

  return (
    <div>
       <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onClick={handleCheckbox}/>
        </form>
        <h5>{checkbox ? "Yes" : "No"}</h5>
      </section>
    </div>
  )
}
