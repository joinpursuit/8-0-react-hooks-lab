import React, {useState} from "react";
import "./NumberOfPets.css";


const NumberOfPets = () => {
  const [numOfPets, setNumOfPets] = useState(0);

  const handleDecrease = () => {
  numOfPets > 0 && setNumOfPets(numOfPets - 1);
  }
//if numofpets is greater than 0, decrease by 1, limit at 0

  const handleIncrease = () => {
    setNumOfPets(numOfPets + 1);
  }
  //increasing by 1, changing state of numofpets by 1

return (
  <section className="num-of-pets">
    <h4>Number of Pets</h4>
    <h5>{numOfPets}</h5>
    <div>
    <button onClick={handleDecrease} id="less">-</button>
    <button onClick={handleIncrease} id="more">+</button>
    </div>
    </section>
    );

}

export default NumberOfPets;
