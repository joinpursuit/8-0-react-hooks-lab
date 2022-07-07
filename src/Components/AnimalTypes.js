import React from "react";
import { useState, useEffect } from "react";
import "./AnimalTypes.css";

const AnimalTypes = () => {
  const [newAnimal, setAnimal] = useState("");
  const [animalTypes, newTypes] = useState([
    "dog",
    "cat",
    "ferret",
    "bird",
    "fish",
    "snake",
    "lizard"
  ]);

  const handleAnimal = (e) => {
    setAnimal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newTypes((prevAnimals) => {
    });
  };

  const handleDelete = (e) => {
    animalTypes.splice(animalTypes.indexOf(e.target.key), 1);
  };

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={newAnimal}
            onChange={handleAnimal}
          />
        </label>
        <input type="submit" onSubmit={handleSubmit} />
      </form>
      <ol>
        {animalTypes.map((animal) => {
          return (
            <li key={animal}>
              {animal}
              <button onClick={handleDelete} />
            </li>
          )
        })}
      </ol>
    </section>
  );
};

export default AnimalTypes;
