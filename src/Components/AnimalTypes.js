import { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
  const [animals, setAnimals] = useState(animalTypes);

  const removeAnimal = (animalName) => {
    setAnimals(
      animals.filter((animal) => {
        return animal !== animalName;
      })
    );
  };

  const addAnimal = (animalName) => {
    if (!animals.includes(animalName)) {
      setAnimals([...animals, animalName]);
    }
  };

  const animalsDisplay = animals.map((animal) => {
    return (
      <li key={animal}>
        {animal}
        <button
          onClick={() => {
            removeAnimal(animal);
          }}
        >
          Remove
        </button>
      </li>
    );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addAnimal(event.target["animal-type"].value);
        }}
      >
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>{animalsDisplay}</ol>
    </section>
  );
}

export default AnimalTypes;
