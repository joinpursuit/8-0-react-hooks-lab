import { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [animalList, setAnimalList] = useState(animalTypes);
  const [text, setText] = useState("");

  const handleRemove = (animal) => {
    const ind = animalList.indexOf(animal);
    const copyList = [...animalList];
    copyList.splice(ind, 1);
    setAnimalList(copyList);
  };
  const handleChange = (e) => {
    setText(e.target.value.toLocaleLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const ind = animalList.indexOf(text);
    if (ind === -1) setAnimalList([...animalList, text]);
    setText("");
  };
  return (
    <section className="animal-types">
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="animal-type">
          <input
            type="text"
            id="animal-type"
            value={text}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {animalList.map((animal, i) => (
          <li key={i}>
            {animal} <button onClick={() => handleRemove(animal)}>-</button>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default AnimalTypes;
