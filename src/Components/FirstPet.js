import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [Checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!Checked);
  }
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onClick={handleChecked}/>
        </form>
        <h5>{Checked ? 'Yes' : 'No'}</h5>
      </section>
    );
  }

export default FirstPet