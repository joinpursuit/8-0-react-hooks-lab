import {React, useState} from "react";
import "./NumberOfPets.css";

function NumberOfPets () {

  const [count, setcount] = useState(0)

  const handleIncrement=()=>{
    setcount(count + 1)
  }

  const handleDecrement=()=>{
    setcount(count - 1)
  }

  
    return (


      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{count}</h5>
        <div>
          <button id="less" onClick={count <= 0 ? null : handleDecrement }>-</button>
          <button id="more" onClick={handleIncrement}>+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
