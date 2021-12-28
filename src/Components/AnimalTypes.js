import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [userAnimal, setUserAnimal] = useState("");
  const [animalList, setAnimalList] = useState(animalTypes);

  const deleteAnimal = (event) => {
    setAnimalList(
      animalList.filter((animal) => {
        return event.target.value !== animal;
      })
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    !animalList.includes(userAnimal) &&
      setAnimalList([...animalList, userAnimal]);
  };

  const handleUserInput = (event) => {
    setUserAnimal(event.target.value);
  };

  const listItem = animalList.map((animal, i) => {
    return (
      <li key={i}>
        {animal}
        <button value={animal} onClick={deleteAnimal}></button>
      </li>
    );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={submitHandler}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={userAnimal}
            onChange={handleUserInput}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>{listItem}</ol>
    </section>
  );
};
export default AnimalTypes;
