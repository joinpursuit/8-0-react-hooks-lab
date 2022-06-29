import React, { useState } from 'react';
import './AnimalTypes.css';

const animalTypes = ['dog', 'cat', 'ferret', 'bird', 'fish', 'snake', 'lizard'];

const AnimalTypes = () => {
  const [animalInputs, setAnimalInputs] = useState(animalTypes);

  const deleteAnimal = (animalName) => {
    setAnimalInputs(
      animalInputs.filter((animalInput) => {
        return animalInput !== animalName;
      })
    );
  };

  const addAnimal = (animalName) => {
    if (!animalInputs.includes(animalName)) {
      setAnimalInputs([...animalInputs, animalName]);
    }
  };

  const showAnimals = animalInputs.map((animalInput) => {
    return (
      <li key={animalInput}>
        {animalInput}
        <button onClick={() => deleteAnimal(animalInput)}>Delete</button>
      </li>
    );
  });

  return (
    <section className={'animal-types'}>
      <h4>Animal Types</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addAnimal(event.target['animal-type'].value);
        }}
      >
        <label htmlFor='type'>
          <input type='text' id='animal-type' />
        </label>
        <input className='submit-btn' type='submit' />
      </form>
      <ol>{showAnimals}</ol>
    </section>
  );
};

export default AnimalTypes;
