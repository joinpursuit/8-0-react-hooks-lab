import { React, useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

export default function AnimalTypes() {
  const [animal, newAnimal] = useState(animalTypes);

  function addAnimal(animal) {
    if (!animalTypes.includes(animal)) {
      animalTypes.push(animal);
      newAnimal([...animalTypes]);
      return animalTypes;
    }
  }

  function submit(e) {
    e.preventDefault();
    addAnimal(animal);
  }

  function remove(index) {
    animalTypes.splice(index, 1);
    newAnimal([...animal]);
  }

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={submit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            onChange={(event) => {
              console.log(event);
              newAnimal(event.target.value);
            }}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {animalTypes.map((animal, index) => (
          <li key={animal}>
            {" "}
            {animal}{" "}
            <button
              onClick={() => {
                console.log(index);
                remove(index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
