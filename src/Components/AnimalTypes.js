import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
  const [aTypes, setATypes] = useState(animalTypes);
  function handleSubmit(e) {
    e.preventDefault();
    const newAnimal = e.target["animal-type"].value.trim();
    if (!animalTypes.includes(newAnimal)) {
      setATypes([...aTypes, newAnimal]);
    }
  }

  function removeAnimal(e) {
    const animalIndex = e.target.id;
    console.log(animalIndex);
    const newArr = [...aTypes];
    newArr.splice(animalIndex, 1);
    setATypes(newArr);
  }
  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {aTypes.map((animal, i) => (
          <li key={animal} onClick={removeAnimal} id={i}>
            {animal} <button>X</button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default AnimalTypes;
