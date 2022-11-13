import React from "react";
import "./NumberOfPets.css";
import { useState } from "react";
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
//     )
//   }
// }




function NumberOfPets(){
const[petsNum,setPetsNum]=useState(0)


function handleMinusClick(){
  if(petsNum <= 0){
    return;
  }
    else{
      setPetsNum(petsNum - 1)
    }
  }

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{petsNum}</h5>
      <div>
        <button  id="less" onClick={handleMinusClick}>-</button>
        <button  id="more" onClick={()=>setPetsNum(petsNum+1)}>+</button>
      </div>
    </section>
  );

}


export default NumberOfPets;
