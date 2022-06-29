import React, { useState } from 'react';
import './FirstPet.css';

const FirstPet = () => {
  const [firstPetChecked, setFirstPetChecked] = useState(false);

  return (
    <section className='first-pet'>
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input
          type='checkbox'
          onClick={() => setFirstPetChecked(!firstPetChecked)}
        />
      </form>
      <h5>{firstPetChecked ? 'Yes' : 'No'}</h5>
    </section>
  );
};

export default FirstPet;
