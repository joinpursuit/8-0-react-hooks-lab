import { useState } from "react";
import "./NumberOfPets.css";

function NumberOfPets() {
  const [num, setNum] = useState(0);
  function handleChange(e) {
    console.log(e.target.id);
    if (e.target.id === "less" && num > 0) {
      setNum(num - 1);
    } else if (e.target.id === "more") {
      setNum(num + 1);
    }
  }
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>
        {num} {num === 0 ? "Pet" : "Pets"}
      </h5>
      <div>
        <button id="less" onClick={handleChange}>
          -
        </button>
        <button id="more" onClick={handleChange}>
          +
        </button>
      </div>
    </section>
  );
}

export default NumberOfPets;
