import {React, useState} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes () {
  const [userInput, setUserInput] = useState("")
  const [animalArr, setAnimalArr] = useState(animalTypes)


  const handleSubmit=(e)=>{
    e.preventDefault()
    setAnimalArr([...animalArr, userInput])
    setUserInput("")
  }

  const handleUserInput=(e)=>{
    setUserInput(e.target.value)
  }

 
  const handleRemoveButton=(e)=>{
    // e.nativeEvent.path[1].remove()
    let removePet = animalArr.filter((animal)=> {
      return animal !== e.target.value
    })
    setAnimalArr(removePet)
   }


  let animalArrList = animalArr.map((animal)=>{
    return (
        <li>{animal}<button onClick={(e)=>handleRemoveButton(e)} value={animal}>-</button></li>
    )
  })
 
  

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" value={userInput} onChange={handleUserInput}/>
        </label>
          <input type="submit" />
        </form>
        <ol>{animalArrList}</ol>
    </section>
  );
}

export default AnimalTypes;
