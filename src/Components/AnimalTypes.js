import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
  const [ animal, setAnimal ] = useState("");
  const [ addAnimal, setAddAnimal ] = useState(animalTypes);

  const handleChange = (e) => {
    setAnimal(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(addAnimal.includes(animal)) 
     return; setAddAnimal([ ...addAnimal, animal ]);
    setAnimal("");
    }

  const deleteAnimal = (e) => {
    setAddAnimal(() => { 
    return addAnimal.filter((anim) => anim !== e.target.value);
    });
  }

  const handleAnimalArr = addAnimal.map((anim) => (
    <li><p>{ anim }</p>
    <button value={ anim } onClick={ deleteAnimal }>-</button>
    </li>
    ));
  

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>

        <form onSubmit={ handleSubmit }>
        <label htmlFor="type">
        <input type="text" 
               id="animal-type" 
               value={ animal } 
               onChange= { handleChange } />

        </label>
        <input type="submit" />
        </form>

        <ol>
        { handleAnimalArr }
        </ol>

      </section>
    );
  }


export default AnimalTypes;
