import React, {useState} from "react";
import "./AnimalTypes.css";

const AnimalTypes = () => {

  const [ petType, setPetType ] = useState({ 
    animalTypes: ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"],
    userInput:""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setPetType({...petType, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    !petType.animalTypes.some((type) => type === petType.userInput) && petType.animalTypes.push(petType.userInput)

    setPetType({...petType, animalTypes: petType.animalTypes })
  } 

  const removeAnimalType = (e) => {
    e.target.parentNode.remove()
  }

  const displayAnimalTypes = petType.animalTypes.map((type, i) => <li  key={i}><button onClick={removeAnimalType}></button>{type}</li>)

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input onChange={handleInput} type="text" id="animal-type" name="userInput" />
        </label>
        <input type="submit" />
      </form>
      <ol>{displayAnimalTypes}</ol>
    </section>
  );
}

export default AnimalTypes
