import React, { useState } from 'react';
import './AnimalTypes.css';

const animalTypes = ['dog', 'cat', 'ferret', 'bird', 'fish', 'snake', 'lizard'];

const AnimalTypes = () => {
  const [currAnimalType, setCurrAnimalType] = useState('');
  const [currAnimals, setCurrAnimals] = useState(animalTypes);

  const handleChangeAnimalType = (e) => {
    setCurrAnimalType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currAnimals.includes(currAnimalType)) return;
    setCurrAnimals([...currAnimals, currAnimalType]);
    setCurrAnimalType('');
  };

  const removeAnimal = (e) => {
    setCurrAnimals(() => {
      return currAnimals.filter((animal) => animal !== e.target.value);
    });
  };

  const animals = currAnimals.map((animal) => (
    <li>
      <p>{animal}</p>
      <button value={animal} onClick={removeAnimal}>
        -
      </button>
    </li>
  ));

  return (
    <section className={'animal-types'}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={currAnimalType}
            onChange={handleChangeAnimalType}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>{animals}</ol>
    </section>
  );
};

export default AnimalTypes;
