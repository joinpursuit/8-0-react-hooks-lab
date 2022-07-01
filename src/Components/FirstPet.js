import { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [check, setCheck] = useState(false);

  function handleCheck(e) {
    setCheck(!check);
  }
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" checked={check} onChange={handleCheck} />
      </form>
      <h5>{check ? "Yes" : "No"}</h5>
    </section>
  );
};

export default FirstPet;
