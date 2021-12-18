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
    const deletedType = event.target.parentNode.innerText.split("\n")[1]
    // Use innerText here, which will display delete and then the list item in a new line (separated by "\n")
    setHandleForm({...handleForm, animalTypes: handleForm.animalTypes.filter((type) => type !== deletedType)})
  }

  const results = handleForm.animalTypes.map((type, i) => <li  key={i}><button onClick={handleDelete}>delete</button>{type}</li>)

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
