import React, {useState} from "react";
import "./FirstPet.css";

const FirstPet = () => {

  const [NumberOfPets, setPets] = useState(false);

  const handleCheck = () => {
    setPets(!NumberOfPets)
  }
  //This didn't wor when it was true and I don't understand why
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange={handleCheck}/>
        </form>
        <h5>{NumberOfPets ? "Yes" : "No"}</h5>
      </section>
    );
  }


export default FirstPet;
