import { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onChange={handleChecked} />
      </form>
      <h5>{checked ? "Yes" : "No"}</h5>
    </section>
  );
};

export default FirstPet;
