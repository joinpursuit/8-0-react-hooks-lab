import React from 'react';
import './FirstPet.css';
import { useState } from 'react';

const FirstPet = () => {
  const [checked, setChecked] = useState(false);
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
      </form>
      <h5>{checked ? 'Yes' : 'No'}</h5>
    </section>
  );
};

export default FirstPet;
