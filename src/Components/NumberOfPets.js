import React, { useState } from "react";
import "./NumberOfPets.css";


export default function NumberOfPets() {
  const [numOfPets,updateNumOfPets] = useState(0);
  const handleOnChange = (evt)=>{
    if(evt.target.id==="more"){
      updateNumOfPets(pv=>pv+1);
    }else if(numOfPets>0){
      updateNumOfPets(pv=>pv-1);
    }
  }
  //////////////////////////////////////////////////

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button id="less" onClick={handleOnChange}>-</button>
        <button id="more" onClick={handleOnChange}>+</button>
      </div>
    </section>
  )
}

// class NumberOfPets extends React.Component {
//   render() {
//     return (
//       <section className="num-of-pets">
//         <h4>Number of Pets</h4>
//         <h5>numOfPets</h5>
//         <div>
//           <button id="less">-</button>
//           <button id="more">+</button>
//         </div>
//       </section>
//     );
//   }
// }

// export default NumberOfPets;
