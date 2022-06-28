import { React, useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [animals, setAnimals] = useState([...animalTypes]);
  const [animal, setAnimal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!animals.includes(animal)) setAnimals((prev) => [...prev, animal]);
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
            onChange={({ target }) => setAnimal(target.value.toLowerCase())}
          />
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
                  setAnimals((prev) => prev.filter((e) => e !== animal))
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
};

export default AnimalTypes;
