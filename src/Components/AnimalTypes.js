import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
  let [animalsArr, setAnimalsArr] = useState(animalTypes);

  const handleOnClick = (event) => {
    const toBeRemoved = event.target.parentNode.innerText;
    const filtered = animalsArr.filter((animal) => animal !== toBeRemoved);
    setAnimalsArr(filtered);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.search.value;
    !animalsArr.includes(userInput) &&
      (animalsArr = animalsArr.concat([userInput]));
    setAnimalsArr(animalsArr);
    event.target.reset();
  };

  const eachAnimal = animalsArr.map((animal) => {
    return (
      <li>
        {animal}
        <button onClick={handleOnClick} value="-"></button>
      </li>
    );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" name="search" />
        </label>
        <input type="submit" />
      </form>
      <ol>{eachAnimal}</ol>
    </section>
  );
}
export default AnimalTypes;
