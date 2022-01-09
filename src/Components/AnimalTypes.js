import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [input, setInput] = useState('');
  const [allInputs, setAllInputs] = useState(animalTypes);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!allInputs.includes(input)){
      setAllInputs([...allInputs, input]);
    }
  }

  const handleRemove = (event) => {
    setAllInputs(()=>{
      return allInputs.filter((input) => input !== event.target.id);
    })
  }

  const listofAnimals = allInputs.map((eachAnimal) => {
    return(
      <li>
        {eachAnimal}
        <button onClick={handleRemove} id={eachAnimal}>Remove</button>
      </li>
    )
  })

    return(
      <section className="animal-types">
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input
              type='text'
              id='animal-type'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <input type='submit'/>
        </form>
        <ol> {listofAnimals} </ol>
      </section>
    )
  }

export default AnimalTypes