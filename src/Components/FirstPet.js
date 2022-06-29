import React, {useState}from "react";
import "./FirstPet.css";


export default function FirstPet() {
  const [checkbox, setCheckBox] = useState("No")

const handleCheckbox = (e) => {
  e.preventDefault()
  if(checkbox === "No"){
    setCheckBox("Yes")
  }else{
    setCheckBox("No")
  }

}

  return (
    <div>
       <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onClick={handleCheckbox}/>
        </form>
        <h5>{checkbox}</h5>
      </section>
    </div>
  )
}
