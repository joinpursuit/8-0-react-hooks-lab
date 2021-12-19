import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  let [animalArr, setAnimalArr] = useState(animalTypes);

  const handleOnClick = (event) => {
    const toBeRemoved = event.target.parentNode.innerText;
    const filtered = animalArr.filter((animal) => animal !== toBeRemoved);
    setAnimalArr(filtered);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.find.value;
    !animalArr.includes(userInput) &&
      (animalArr = animalArr.concat([userInput]));
    setAnimalArr(animalArr);
    event.target.reset();
  };

  const Animals = animalArr.map((animal) => {
    return (
      <li>
        {animal}
        <button onClick={handleOnClick}></button>
      </li>
    );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={onSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" name="find" />
        </label>
        <input type="submit" />
      </form>
      <ol>{Animals}</ol>
    </section>
  );
};

export default AnimalTypes;
