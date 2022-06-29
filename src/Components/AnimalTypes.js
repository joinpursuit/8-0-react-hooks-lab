import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {

const [input, setInput] = useState('')
const [type, setType] = useState('')

const handleSubmit = (event) => {
  event.preventDefault();
  animalTypes.map((animal) =>{
    if(animal === input){
        setType(<div>{input} <button onClick={handleRemove}>-</button></div>)  
        setInput('')
    } 
  })

}

const handleRemove = () => {
setType('')
}
    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input onChange={(e) => setInput(e.target.value)} type="text" id="animal-type" value={input}/>
          </label>
          <input type="submit" />
        </form>
        <ol>
          <li>{type}</li>
        </ol>
      </section>
    );
}

export default AnimalTypes;
