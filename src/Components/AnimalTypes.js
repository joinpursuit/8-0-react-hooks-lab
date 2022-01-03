import React from "react";
import "./AnimalTypes.css";
import {useState} from 'react'

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes=()=>{
  const[animalList, setanimalList] = useState(animalTypes)
  const[inputAnimal, setinputAnimal] = useState("")


  const updateInputAnimal=(e)=>{
    setinputAnimal(e.target.value)
  }

  const submitAnimal=(e)=>{
    e.preventDefault()

    if(inputAnimal !== "" && !animalList.includes(inputAnimal)){
      setanimalList([...animalList, inputAnimal])
    }
    setinputAnimal("")  
  }

  const removeAnimal=(e)=>{
    let indexValue = animalList.indexOf(e.target.value)
     let newList = animalList.filter((animal)=>{
       return animal !== animalList[indexValue]
     })

    setanimalList(newList)
  }

  let listedAnimals = animalList.map((animal, index)=>{
    return <li key={index}>{animal}<button value={animal} onClick={removeAnimal}>Remove</button></li>
  })
    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={submitAnimal}>
          <label htmlFor="type">
            <input onChange={updateInputAnimal}value={inputAnimal}type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol>{listedAnimals}</ol>
      </section>
    );
}

export default AnimalTypes;
