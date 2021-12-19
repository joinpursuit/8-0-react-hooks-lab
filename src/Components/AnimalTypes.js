import React from "react";
import "./AnimalTypes.css";
import { useState } from "react";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {

  const [ userInput, setUserInput ] = useState("");
  const [ data, setData ] = useState(animalTypes)

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    data.includes(userInput) 
    ? setUserInput("")
    : setData([...data, userInput]) 
  }

  const handleRemove = (event) => {
    setData(() => { 
      return data.filter((type) => type !== event.target.value)
    })
  }

  const handleMap = data.map((type) => {
    return (
      <li>
        {type}
        <button value={type} onClick={handleRemove}>-</button>
      </li>
    )
  })

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" value={userInput} onChange={handleChange}/>
        </label>
        <input type="submit" />
      </form>
      <ol>{handleMap}</ol>
    </section>
  );
}

export default AnimalTypes;
