import React from 'react';
import './AnimalTypes.css';
import { useState } from 'react';

//const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
  const animalTypes = [
    'dog',
    'cat',
    'ferret',
    'bird',
    'fish',
    'snake',
    'lizard',
  ];
  const [inputAnimal, setInputAnimal] = useState('');

  const [animalList, setAnimalsList] = useState(animalTypes);

  const handleChange = (event) => {
    setInputAnimal(event.target.value.toLowerCase());
  };

  const addAnimal = (userInput) => {
    const newAnimal = [...animalList, userInput];
    setAnimalsList(newAnimal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!animalList.includes(inputAnimal)) addAnimal(inputAnimal);
    setInputAnimal('');
  };

  const handleClickRemove = (idx) => {
    let newArr = [...animalList];
    newArr.splice(idx, 1);
    setAnimalsList(newArr);
  };

  //or .filter??^

  return (
    <section className={'animal-types'}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={inputAnimal}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {animalList.map((animal, index) => {
          return (
            <li key={index}>
              {animal}
              <button onClick={() => handleClickRemove(index)}>Remove</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default AnimalTypes;
