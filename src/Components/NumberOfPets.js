import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [ count, setCount ] = useState(0);

  const handleMore = () => {
    setCount(count + 1);
  }

  const handleLess = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }
  
  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{count}</h5>
      <div>
        <button id="less" onClick={handleLess}>-</button>
        <button id="more" onClick={handleMore}>+</button>
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

export default NumberOfPets;
