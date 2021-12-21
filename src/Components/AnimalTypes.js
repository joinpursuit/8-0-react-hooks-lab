import React, {useState} from "react";
import "./AnimalTypes.css";


      const AnimalTypes = () => {

      const [handleForm, setHandleForm ] = useState(
      { 
      animalTypes:["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"],
      userInput: ""
      })  ;//making a list for each type of animal

      const handleInput = (event) => {

      setHandleForm({...handleForm, [event.target.name]: event.target.value.trim().toLowerCase()})
      //event.target.name is the name of the state
      }
  
    const afterSubmit = (event) => {
    event.preventDefault(); //prevent refresh
    //checking to see if the animal type = userinput
    //if false, input isnt added to array
    //if true, input is added to the array, if
    !handleForm.animalTypes.some((type) => type === handleForm.userInput) && handleForm.animalTypes.push(handleForm.userInput)
    //adding animal type. if it exists, animal isn't added [no duplicates]

    setHandleForm({...handleForm, animalTypes: handleForm.animalTypes}) //new user input becomes a part of animal types

    event.target.reset(); //reset forms
    }

  const handleDelete = (event) => {
  const deletedType = event.target.parentNode.innerText.split('\n')[1] //[delete], [animaltype] --> txt that gets deleted
  setHandleForm({...handleForm, animalTypes: handleForm.animalTypes.filter((type)=> type !== deletedType)})
  //looking to see if deletedType exists within the elements of the array
  //if it exists, filter it out.
  //return the array without the animal type
  //updates the state: animalTypes
  console.log(handleForm.animalTypes.filter((type)=> type !== deletedType))
  }
  
  const results = handleForm.animalTypes.map((type, i) => <li key={i}><button onClick={handleDelete}>delete</button>{type}</li>)
  //<li> is a parent of button
  //console.dir


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
