import React, {useState} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"]

const AnimalTypes = () => {

  const [animals, setAnimals] = useState({
    userInput: '',
    animalTypes,
  })

  const handleChange = (event) => {
    const { value } = event.target
    setAnimals({...animals, userInput: value})
  }

  const handleRemove = (event) => {
    const {animalTypes: types} = animals
    const { id } = event.target
    setAnimals({...animals, animalTypes: types.filter(animal => animal !== types[id])})
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const {animalTypes: types, userInput} = animals
    setAnimals({...animals, animalTypes: [...types, userInput]})
  }

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleAdd}>
        <label htmlFor="type">
          <input onChange={handleChange} type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>{animals.animalTypes.map((animal, index) =>  <li key={index}>{animal}<button id={index} onClick={handleRemove}></button></li>)}</ol>
    </section>
  );
}

export default AnimalTypes;






