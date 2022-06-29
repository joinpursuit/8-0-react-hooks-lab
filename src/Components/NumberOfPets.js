import React from "react";
import "./NumberOfPets.css";
// import { useState } from "react";

export default function NumberOfPets() {

  // let [num, setNum] = useState(0);

  let handleClick = (e) => {
    
  }


  return (
    <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>numOfPets</h5>
        <div>
          <button id="less" onClick={ handleClick }>-</button>
          <button id="more" onClick={ handleClick }>+</button>
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