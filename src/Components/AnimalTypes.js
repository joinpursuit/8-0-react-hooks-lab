import React, {useState} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"]

const AnimalTypes = () => {

  const [useObj, setObj] = useState({
    userInput: '',
    animalTypes,
  })

  const handleInputChange = (event) => {
    const { value } = event.target
    setObj({...useObj, userInput: value})
  }

  const handleRemoveAnimal = (event) => {
    const {animalTypes: types} = useObj
    const { id } = event.target
    setObj({...useObj, animalTypes: types.filter(el => el !== types[id])})
  }

  const handleAddPet = (event) => {
    event.preventDefault()
    const {animalTypes: types, userInput} = useObj
    setObj({...useObj, animalTypes: [...types, userInput]})
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
      <ol>{useObj.animalTypes.map((el, index) =>  <li key={index}>{el}<button id={index} onClick={handleRemoveAnimal}></button></li>)}</ol>
    </section>
  );
}

export default AnimalTypes;
