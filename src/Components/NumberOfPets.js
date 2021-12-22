import React, { useState } from "react";
import "./NumberOfPets.css";

function NumberOfPets() {
  const [ petCount, setPetCount ] = useState(0);
  // const [ increasePets, setIncreasePets ] = useState(1);

  const handleMore = () => {
    setPetCount(petCount + 1);
  }
  
  const handleLess = () => {
    if( petCount <= 1 );
    return setPetCount(petCount ? (petCount -1) : 0);
  }
  
  // const handleChangeAmount = (e) => {
  //   setIncreasePets(Number(e.target.value));
  // }
    return (
      <section className="num-of-pets">

        <h4>Number of Pets</h4>
        <h5> 
          { petCount } 
          {setPetCount}
        </h5>

        <div>
          <button id="less" onClick={ handleLess }>-</button>
          {/* <input value={ increasePets } onChange={ handleChangeAmount } /> */}
          <button id="more" onClick={ handleMore }>+</button>
        </div>

      </section>
    );
  }


export default NumberOfPets;
