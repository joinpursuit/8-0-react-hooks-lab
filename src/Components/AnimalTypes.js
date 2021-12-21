import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [animals, setAnimals] = useState([...animalTypes]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!animals.includes(input)) {
      setAnimals([...animals, input]);
    }

    setInput("");
  };

  const handleClick = (event) => {
    setAnimals([
      ...animals.filter((item, index) => {
        return index !== event.target.value;
      }),
    ]);
  };

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            onChange={handleChange}
            value={input}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {animals.map((item, index) => {
          return (
            <li key={index + item} value={index} onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default AnimalTypes;
