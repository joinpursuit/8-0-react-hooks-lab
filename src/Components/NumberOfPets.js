import React, {useState} from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  //was unsure how to do this with react.component so I switched it around to fit what we did in class. 
  
 let [numOfPets, setNumOfPets] = useState(0);
 //if this works... I will be using this constant the same way you would typically use a constructor/set state. 

 const deletePet = () => {
  numOfPets > 0 && setNumOfPets(numOfPets -1)
 }
 //I know this can be done with an if else statement but ive never used && in a code and want to try

 const addPets = () =>{
   setNumOfPets(numOfPets + 1)
 }
   
    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{numOfPets}</h5>
        <div>
          <button id="less" onClick={addPets}>-</button>
          <button id="more" onClick={deletePet}>+</button>
        </div>
      </section>
    );
  }
//this isn't passing but I feel like it should be correct. Check in with Tashawnee to see if she can see issue. 
export default NumberOfPets;
