import React, { useState } from "react";
import "./AnimalTypes.css";


export default function AnimalTypes() {
  const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];
  const [newAnimal, setNewAnimal] = useState("");
  const [allAnimals, setAllAnimals] = useState(animalTypes)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allAnimals.includes(newAnimal)) {
      setAllAnimals([...allAnimals, newAnimal]);
    }
  };

  const handleDelete = (e) => {
    setAllAnimals(() => {
      return allAnimals.filter((input) => input !== e.target.value)
    })
  }


  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            value={newAnimal}
            onChange={(e) => setNewAnimal(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {allAnimals.map((animal) => {
         return <li>{animal} <button onClick={handleDelete} value={animal}>Remove</button></li>;
        })}
      </ol>
    </section>
  );
}
