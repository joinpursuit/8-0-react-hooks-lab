import React from 'react';
import './FirstPet.css';

const FirstPet = ({ setIsFirstPet, isFirstPet }) => {
  const handleSetIsFirstPet = () => {
    setIsFirstPet(!isFirstPet);
  };
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onChange={handleSetIsFirstPet} />
      </form>
      <h5>{isFirstPet ? <p>Yes</p> : <p>No</p>}</h5>
    </section>
  );
};

export default FirstPet;
