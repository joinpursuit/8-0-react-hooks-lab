import React, {useState} from "react";
import "./AnimalTypes.css";



const AnimalTypes = () => {

  const [useObj, setObj] = useState({
    userInput: '',
    animalTypes: ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"]
  })

  const handleInputChange = (event) => {
    setObj({...useObj, userInput: event.target.value})
  }

  const handleRemoveAnimal = (event) => {
    setObj({...useObj, animalTypes: useObj.animalTypes.filter(el => el !== useObj.animalTypes[event.target.id])})
  }

  const handleAddPet = (event) => {
    event.preventDefault()
    setObj({...useObj, animalTypes: [...useObj.animalTypes, useObj.userInput]})
  }

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleAddPet}>
        <label htmlFor="type">
          <input onChange={handleInputChange} type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>{useObj.animalTypes.map((el, index) =>  <li>{el}<button id={index} onClick={handleRemoveAnimal}></button></li>)}</ol>
    </section>
  );
}

export default AnimalTypes;
