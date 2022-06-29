import React from "react";
import "./AnimalTypes.css";
import { useState } from 'react'

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  
  const [animals, setAnimals] = useState([...animalTypes])
  const [animal, setAnimal] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!animals.includes(animal)) {
      setAnimals((prev) => [...prev, animal])
    }
  }

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input type="text" id="animal-type" value={animal} onChange={(event) => setAnimal(event.target.value.toLowerCase())} />
          </label>
          <input type="submit" />
        </form>
        <ol>
        {animals.map((animal, index) => {
          return (
            <li key={index}>
              {animal}
              <button
                onClick={() =>
                  setAnimals((prev) => prev.filter((event) => event !== animal))
                }
              >
                Remove
              </button>
            </li>
          );
        })}
        </ol>
      </section>
    );
  }


export default AnimalTypes;
