import React from "react";
import { useState, useEffect } from "react";
import "./AnimalTypes.css";

const AnimalTypes = () => {
  const [animal, setAnimal] = useState("");
  const [animalTypes, setAnimalTypes] = useState([
    "dog",
    "cat",
    "ferret",
    "bird",
    "fish",
    "snake",
    "lizard",
  ]);

  const handleAnimal = (e) => {
    setAnimal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimalTypes((prevAnimals) => {
      return [...prevAnimals, animal];
    });
    setAnimal("");
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
    setAnimalTypes((prevAnimals) => {
      return prevAnimals.filter((animal, index) => {
        return index == e.target.id ? false : true; 
      });
    });
  };

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={animal}
            onChange={handleAnimal}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {animalTypes.map((animal, index) => {
          return (
            <li key={animal}>
              {animal}
              <button id={index} onClick={handleDelete}>
                DELETE
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default AnimalTypes;
