import React from "react";
import { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [newTypes, setNewTypes] = useState(animalTypes);
  const [input, setInput] = useState('');

  const handleForm = (e) =>{
    e.preventDefault();
    if(!newTypes.includes(input)){
      setNewTypes([...animalTypes, input])
    }
  }

  const handleRemoval = (e) =>{
    const {value} = e.target;
    const newList = newTypes.filter(animal => animal !== value)
    setNewTypes(newList);
  }

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleForm}>
          <label htmlFor="type">
            <input type="text" id="animal-type" value={input} onChange={(e) => setInput(e.target.value)} />
          </label>
          <input type="submit" />
        </form>
        <ol>
          {newTypes.map((animal, index) =>{
            return (
              <>
              <li>{animal}<button type="submit" value={animal} onClick={handleRemoval}>x</button></li>
              </>
            )
          })}
        </ol>
      </section>
    );
}

export default AnimalTypes;
