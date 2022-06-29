import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets = () =>{

  const [petNumber, setPetNumber] = useState(0)
  const handleNumberofPets = (e) => {
    const {id} = e.target
    if(id === "less" && petNumber > 0){
      setPetNumber(petNumber - 1)
    }else if(id === 'more'){
      setPetNumber(petNumber + 1)
    }
   }
  console.log(petNumber)
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{petNumber}</h5>
        <div>
          <button id="less" onClick ={handleNumberofPets}>-</button>
          <button id="more" onClick ={handleNumberofPets}>+</button>
        </div>
      </section>
    ); 
}

export default NumberOfPets;
