import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [ animal, setAnimal ] = useState('');
  const [ error, setError ] = useState(false);
  const [ animalList, setAnimalList ] = useState([...animalTypes]);

  const handleChange = (event) => {
    const { value } = event.target;
    setError(false);
    setAnimal(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // >> Validating duplicated value
    if(animal !== '') {
      if(validateCurrentType(animal.trim().toLowerCase())) {
        animalList.push(animal.trim());
      } else {
        setError(true);
      }
    }
    
    setAnimal('');
  }

  const handleRemove = (item) => {
    const filtered = animalList.filter(animal => animal !== item);
    setAnimalList(filtered);
  }

  const validateCurrentType = (value) => {
    return (!animalList.includes(value)) ? true : false; 
  }

  return (
    <section className={"animal-types container"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type"></label>
        {(error) ? <p className="error__validation">{'Error: Animal type already exist'}</p> : null}
        <input 
          type="text" 
          id="animal-type"
          value={animal}
          onChange={handleChange}
        />
        <input 
          type="submit"
        />
      </form>
      <ol>
        {animalList.map((animal, index) => {
          return <li key={index}>{animal} <button onClick={() => handleRemove(animal)}>-</button></li>
        })}
      </ol>
    </section>
  );
}

export default AnimalTypes;