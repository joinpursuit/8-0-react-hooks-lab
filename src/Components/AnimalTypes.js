import { useState } from "react";
import "./AnimalTypes.css";

const AnimalTypes = () => {
  const [animalType, setAnimalType] = useState("");

  const [animalTypes, setAnimalTypes] = useState([
    "dog",
    "cat",
    "ferret",
    "bird",
    "fish",
    "snake",
    "lizard",
  ]);

  const renderAnimalTypes = () => {
    let keyNum = 0;

    return animalTypes.map((animal) => {
      return (
        <li key={keyNum++}>
          {animal}
          <button
            onClick={() => {
              deleteFromAnimalTypes(animal);
            }}
          >
            -
          </button>
        </li>
      );
    });
  };

  const addToAnimalTypes = (e) => {
    e.preventDefault();

    if (animalType === "" || animalTypes.includes(animalType)) {
      setAnimalType("");
      return;
    } else {
      setAnimalTypes([...animalTypes, animalType]);
      setAnimalType("");
    }
  };

  const deleteFromAnimalTypes = (animal) => {
    setAnimalTypes(animalTypes.filter((type) => type !== animal));
  };

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={(e) => addToAnimalTypes(e)}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>{renderAnimalTypes()}</ol>
    </section>
  );
};

export default AnimalTypes;
