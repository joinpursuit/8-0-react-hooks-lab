import React from "react";
import { useState } from "react/cjs/react.development";
import "./AnimalTypes.css";
import AnimalType from "./AnimalType";




const AnimalTypes = () => {
  
  const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];


  const [addThisAnimal, setAddThisAnimal] = useState(animalTypes)
  const [typedAnimal, setTypedAnimal] = useState("")

  // get an user's input -> works!
  const getAnimal = (e) => {
    e.preventDefault() 
    setTypedAnimal(e.target.value)
    
  }

  console.log(typedAnimal)

// when submitting, if the userInput matches with one of the animals in the array, add it to the state, addThisAnimal.
// if there is a duplicate, it cannot be added again.
  const handleSubmit = (e) => {
    e.preventDefault() 

  //   let find = animalTypes.find((animal) => {

  //     return animal === typedAnimal.toLowerCase()
  // })  
    // if (!find) {
    //   return;
    // }
    if (addThisAnimal.includes(typedAnimal)) {
     return;
    }

  setAddThisAnimal([...addThisAnimal, typedAnimal])
  }



// allow users to remove an animal with an on click of a button
  const removeAnimal = (e) => {
 
    const newList = addThisAnimal.splice(e.target.id, 1);
    console.log("addThisNimal:", addThisAnimal, "newList:", newList)
    const filtering = addThisAnimal.filter((each) =>each !== newList)
    setAddThisAnimal(filtering)

  }

  const reset = () => {
    setAddThisAnimal([])
  }


  const displayAddedAnimals = addThisAnimal.map((animal, i) => {
    return (
      <AnimalType
        index={i}
        removeAnimal={removeAnimal}
        animal={animal}
        key={i + "eifhsdf"}
        reset={reset}
      />
    )
  })


    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input onChange={getAnimal} type="text" id="animal-type"/>
          </label>
          <input type="submit" />
        </form>
        <ol>{displayAddedAnimals}</ol>
      </section>
    );
  
}

export default AnimalTypes;
