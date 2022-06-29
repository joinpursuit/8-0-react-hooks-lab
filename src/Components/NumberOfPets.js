
import React, {useState} from "react";
import "./NumberOfPets.css";


export default function NumberOfPets() {

  const [numOfPets, setNumOfPets] = useState(0)


  const minus = (e) => {
    e.preventDefault()
    if(numOfPets > 0){
      setNumOfPets(numOfPets - 1)
    }
  }

  const plus = (e) => {
    e.preventDefault()
    setNumOfPets(numOfPets + 1)
  }

  return (
    <div>
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numOfPets}</h5>
        <div>
          <button id="less" onClick={minus}>-</button>
          <button id="more" onClick={plus}>+</button>
        </div>
      </section>
    </div>
  )
}