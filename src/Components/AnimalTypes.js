import React from "react";
import "./AnimalTypes.css";
import { useState } from "react";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  // USE STATE RETURNS AN ARRAY
  const [animalList, setAnimalList] = useState(animalTypes)
  const [userInput, setUserInput] = useState("")
  
  const handleUserInput = (event) => {
    setUserInput(event.target.value.toLowerCase())
  }
// IF ANIMAL LIST DOES NOT INCLUDE USER INPUT ADD IT TO ARRAY
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(!animalList.includes(userInput))
    !animalList.includes(userInput) && setAnimalList([...animalList, userInput])
    setUserInput("")
  }

  const handleClick = (event) => {
    const remainder = animalList.filter((animal) => {
      return event.target.name !== animal
    });
    setAnimalList(remainder)
  }

  const animals = animalList.map((animal, i) => {
    return (
      <li key={i}>
        {animal}
        <button name={animal} onClick={handleClick}>remove</button>
      </li>
    )
  })
    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input 
            type="text" 
            id="animal-type" 
            value={userInput} 
            onChange={handleUserInput}/>
          </label>
          <input type="submit" />
        </form>
        <ol>{animals}</ol>
      </section>
    );
  }


export default AnimalTypes;
