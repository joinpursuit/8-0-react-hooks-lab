import React, {useState} from "react";
import "./AnimalTypes.css";

const AnimalTypes = () => {

  const [ handleForm, setHandleForm ] = useState({ 
    animalTypes: ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"],
    userInput:""
  })

  const handleInput = (event) => {
    setHandleForm({...handleForm, [event.target.name]: event.target.value.trim().toLowerCase()})
  }

  const afterSubmit = (event) => {
    event.preventDefault(); 

    !handleForm.animalTypes.some((type) => type === handleForm.userInput) && handleForm.animalTypes.push(handleForm.userInput)

    setHandleForm({...handleForm, animalTypes: handleForm.animalTypes })

    event.target.reset();
  } 

  const handleDelete = (event) => {
    event.target.parentNode.remove()
  }

  const results = handleForm.animalTypes.map((type, i) => <li  key={i}><button onClick={handleDelete}></button>{type}</li>)

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={afterSubmit}>
        <label htmlFor="type">
          <input onChange={handleInput} type="text" id="animal-type" name="userInput" />
        </label>
        <input type="submit" />
      </form>
      <ol>{results}</ol>
    </section>
  );
}

export default AnimalTypes;
