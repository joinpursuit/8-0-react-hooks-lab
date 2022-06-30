import { React,  useState } from 'react';
import './NumberOfPets.css';



function NumberOfPets() {
  const [count, setCount] = useState(0);
  let increment = () => {
    setCount(Number(count) + 1);
  };

  let decrement = () => {
    if (count > 0) {
      setCount(Number(count) - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <section className='num-of-pets'>
      <h4>Number of Pets</h4>
      <h5>numOfPets:{count}</h5>

      <div>
        <button onClick={decrement} id='less'>
          -
        </button>
        <button onClick={increment} id='more'>
          +
        </button>
      </div>
    </section>
  );
}

export default NumberOfPets;






// import Pet from './Pet';

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