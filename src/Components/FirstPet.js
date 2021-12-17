import React, {useState} from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [isFirstPet, setFirstPet] = useState(false)

  const handleChange = () => {
    setFirstPet(!isFirstPet)
  }

    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input onChange={handleChange} type="checkbox" />
        </form>
        <h5>{isFirstPet ? "Yes" : "No"}</h5>
      </section>
    );
}

export default FirstPet;
