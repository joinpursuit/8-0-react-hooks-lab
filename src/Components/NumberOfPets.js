import './NumberOfPets.css';
import { useState } from 'react';

const NumberOfPets = () => {
  const [num, setNum] = useState(0);

  const minusNum = () => {
    setNum(num ? num - 1 : num);
  };

  const plusNum = () => {
    setNum(num + 1);
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{num.toString()}</h5>
      <div>
        <button id="less" onClick={minusNum}>
          -
        </button>
        <button id="more" onClick={plusNum}>
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
