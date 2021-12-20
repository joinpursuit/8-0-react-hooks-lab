import "./AnimalTypes.css";
import { useState } from "react";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [animalList, setAnimalList] = useState(animalTypes);
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    !animalList.includes(userInput) && userInput && setAnimalList([...animalList, userInput]);
  };

  const handleClick = (event) => {
    const remainder = animalList.filter((animal) => {
      return event.target.name != animal;
    });
    setAnimalList(remainder);
  };

  const animals = animalList.map((animal) => {
    return (
      <li key={animal}>
        {animal}
        <button name={animal} onClick={handleClick}>
          -
        </button>
      </li>
    );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input onChange={handleChange} value={userInput} type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>{animals}</ol>
    </section>
  );
};

export default AnimalTypes;
