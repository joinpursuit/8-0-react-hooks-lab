import React, { useState } from "react";
import "./AnimalTypes.css";


const AnimalTypes=()=>{
  const animalTypesArr = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];
   
  const [ animalTypes, setAnimalTypes ] = useState(animalTypesArr);
  const [ userInput, setUserInput ] = useState('')

  const handleSubmit=(event)=>{
    event.preventDefault();
    const isIncluded = animalTypes.includes(userInput);

    setAnimalTypes(!isIncluded ? [userInput, ...animalTypes] : animalTypes)
  }

  const handlePersonInput=(event)=>{
    setUserInput(event.target.value.trim().toLowerCase())
  }

  const removeButton=(event)=>{
    const filteredArr = animalTypes.filter((animal)=>{
      return animal !== event.target.value;
    })

    setAnimalTypes(filteredArr);
  }

    const animalList = animalTypes.map((animal, index)=>{
      return (
        <li key={index}>{animal}
          <button 
            onClick={removeButton} 
            value={animal}
          >-
          </button>
        </li>
      )
    })

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form>
          <input 
            type="text" 
            id="animal-type"
            placeholder="type an animal" 
            value={ handlePersonInput }  
            onChange={ handlePersonInput }
          />
          <input onClick={handleSubmit} type="submit" />
        </form>
        <ol>
          {animalList}
          {userInput === 'chinchilla' ? '/confused/' : '/chinchilla/'}
        </ol>
      </section>
    );
}

export default AnimalTypes;
