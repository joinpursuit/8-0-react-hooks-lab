import React, {useState} from "react";
import "./AnimalTypes.css";

const AnimalTypes = () => {

  const [ handleForm, setForm ] = useState({ 
    animalTypes: ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"],
    userInput:""
  })

  const handleInput = (event) => {
    setForm({...handleForm, [event.target.name]: event.target.value.trim().toLowerCase()})
  }//trim removes white space. You probably don't need it but playing around. 

  const submits = (event) => {
    event.preventDefault(); 

    !handleForm.animalTypes.some((type) => type === handleForm.userInput) && handleForm.animalTypes.push(handleForm.userInput)

    //Honestly the shorter of doing this wasn't working for me so just went with this.

    setForm({...handleForm, animalTypes: handleForm.animalTypes })

    event.target.reset();
  } 

  const handleDelete = (event) => {
    event.target.parentNode.remove()
  }
//ask why naming it delete alone brought an error 
  const results = handleForm.animalTypes.map((type, i) => <li  key={i}><button onClick={handleDelete}></button>{type}</li>)

  //To be honest im still confused about they key. I see it in the reading and know why angie needed it but I don't get why this didn't wor without it. 

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={submits}>
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
