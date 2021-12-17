import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {

    let [count, setCount] = useState(0)

    const handleCounter = (event) => {
      setCount(count = event.target.id === "less" ? count - 1 : count + 1)
    }

    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{count}</h5>
        <div>
          <button onClick={handleCounter} id="less">-</button>
          <button onClick={handleCounter} id="more">+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
