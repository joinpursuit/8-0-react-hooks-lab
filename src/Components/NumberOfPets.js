import React, {useState} from "react";
import "./NumberOfPets.css";

function NumberOfPets() {

  const [count, setCount] = useState(0)

  return (
    <section className="num-of-pets">
    <h4>Number of Pets</h4>
    <h5>numOfPets: {count}</h5>
    <div>
      <button id="less" onClick={()=> setCount(count +1)}>-</button>
      <button id="more" onClick={()=> setCount(count -1)}>+</button>
    </div>
  </section>
  )
}

export default NumberOfPets






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
