import './FirstPet.css';
import { useState } from 'react';

const FirstPet = () => {
  const [first, setFirst] = useState(false);
  const toggleFirst = () => {
    setFirst(!first);
  };
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onChange={toggleFirst} />
      </form>
      <h5>{first ? 'Yes' : 'No'}</h5>
    </section>
  );
};

export default FirstPet;
