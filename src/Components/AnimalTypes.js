import { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [input, setInput] = useState("");
  const [allInputs, setAllInputs] = useState(animalTypes);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!allInputs.includes(input)) {
      setAllInputs([...allInputs, input]);
    }
  };

  const handleDelete = (event) => {
    setAllInputs(() => {
      return allInputs.filter((input) => input !== event.target.id);
    });
  };

  const listOfAnimals = allInputs.map((animal) => {
    return (
      <li>
        {animal}
        <button onClick={handleDelete} id={animal}>
          {" "}
          Remove
        </button>
      </li>
    );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ol> {listOfAnimals} </ol>
    </section>
  );
};

export default AnimalTypes;