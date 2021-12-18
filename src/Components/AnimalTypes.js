import React, {useState} from "react";
import "./AnimalTypes.css";


const AnimalTypes = () => {
  
  const [handleForm, setHandleForm ] = useState(
    { 
      animalTypes:["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"],
      userInput: ""
    })  ;

  let results = "";
    //making a list for each type of animal
  
  const handleInput = (event) => {
  setHandleForm({...handleForm, [event.target.name]: event.target.value.trim().toLowerCase()})
  }
  
  const afterSubmit = (event) => {
    event.preventDefault(); //prevent refresh
    //checking to see if the animal type = userinput
    //if false, input isnt added to array
    //if true, input is added to the array, if
    !handleForm.animalTypes.some((type) => type === handleForm.userInput && handleForm.animalTypes.push(handleForm.userInput))
    
    setHandleForm({...handleForm, animalTypes: handleForm.animalTypes}) //new user input becomes a part of animal types

    results = animalTypes.map((type, i) => <li onClick={handleDelete} key={i}>{type}</li>)

    event.target.reset();
  }


  return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit = {afterSubmit}>
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
