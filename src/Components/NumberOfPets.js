import React from "react";
import "./NumberOfPets.css";

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


export default function NumberOfPets() {
  return (
    <section className="num-of-pets">
        <h4>Number of Pets</h4>
           <h5>numOfPets</h5>
          <div>
             <button id="less">-</button>
              <button id="more">+</button>
          </div>
        </section>
  )
}


