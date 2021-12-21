import React from "react";
import "./AnimalTypes.css";
import { useState } from 'react';

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes=()=>{
  const [ newAnimalArr, setNewAnimalArr ] = useState([]);
  const [ userInput, setUserInput ] = useState('')

  const handleInput=(event)=>{
    event.preventDefault();
    setUserInput(event.target.value) 
  }

  // const addToList=(event)=>{
  //   setNewAnimalArr(animalArr + event.target.value)
  // }

  const removeButton=(event)=>{
    setNewAnimalArr(event.target.value)
  }

  const animalList = animalTypes.map((animal, index)=>{
    return (
      <div key={index}>
        <li>{animal}<button onClick={(e)=>removeButton(e)}>-</button></li>
      </div>
    )
  })

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onClick={(e)=>handleInput(e)}>
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>{animalList}</ol>
    </section>
  );
}

export default AnimalTypes;
