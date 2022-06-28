import {React, useState} from "react";
import "./AnimalTypes.css";

export default function AnimalTypes({ updatedPets, setUpdatedPets }){
  const [inputValue, setInput] = useState('');

  const onAddAnimal = (e) => {
    setInput(e.target.value);
  }

  const removeAnimal = (animalToRemove) => {
    const newList = updatedPets.filter((animal) => animal !== animalToRemove);
    setUpdatedPets(newList);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(updatedPets.includes(inputValue)){
      alert('Already on the list of animal. Please try again')
    } else {
      setUpdatedPets(preArry => [...preArry, `${inputValue}`]);
    }
    setInput('');
  }
  

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="type">
            <input type="text" id="animal-type" onChange={onAddAnimal} value={inputValue}/>
          </label>
          <input type="submit" />
        </form>
        <br/>
        <ol>
          { updatedPets.map(el => {
            return (
            <li key={el} value={el}> {el}  
            <button onClick={() => removeAnimal(el)} > Remove </button> 
            </li> )
          }) }
        </ol>
      </section>
    );

}

