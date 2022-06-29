import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState(animalTypes);

  const handleSubmit = (e) => {
   e.preventDefault();
   if(!type.includes(input)) {
    type.push(input)
    setType(type)
    setInput("")
   }
  }
   const handleDelete = (e) => {
    setType(type.filter((animal) => animal !== e.target.value))
   }
   
 
    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit= {handleSubmit}>
          <label htmlFor="type">
            <input onChange={(e) => setInput(e.target.value)} type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>

        <ol>
          {
            type.map((animal) => {
              return (
                <li>{animal} 
                <button onClick = {handleDelete} >
                   - </button></li>
              )
            })
          }
        </ol>
      </section>
    );
  }


export default AnimalTypes;
