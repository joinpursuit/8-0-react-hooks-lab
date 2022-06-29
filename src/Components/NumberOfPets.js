import React from "react";
import "./NumberOfPets.css";
import { useState } from "react";

export default function NumberOfPets() {
  let [num, setNum] = useState(0);

  let handleClickAdd = (e) => {
    setNum((num += 1));
  };

  let handleClickSubtract = (e) => {
    setNum((num -= 1 && num > 0));
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{num}</h5>
      <div>
        <button id="less" onClick={handleClickSubtract}>
          -
        </button>
        <button id="more" onClick={handleClickAdd}>
          +
        </button>
      </div>
    </section>
  );
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
