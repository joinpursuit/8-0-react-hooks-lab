import {useState} from "react";
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

function NumberOfPets () {
  const [count, setCount] = useState(0);
  
  const handleDecrement =()=>{
    if(count>0){
      setCount(count - 1)
    }
  }
  const handleIncrement =()=> {
    setCount(count + 1)
  }
  return(
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
         <h5>{count}</h5>
         <div>
           <button onClick={handleDecrement} id="less">-</button>
           <button onClick={handleIncrement} id="more">+</button>
         </div>
    </section>
  )
}

export default NumberOfPets;
