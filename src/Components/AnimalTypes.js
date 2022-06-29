import React,{useState} from "react";
import "./AnimalTypes.css";

let animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () =>{
  const [animalTypesArr, setAnimalTypeArr] = useState(animalTypes)
  const [input, setInput] = useState("");
  

  const handleDelete = (e) => {
    const newList = animalTypesArr.filter((animal) => 
      animal !== e.target.parentNode.textContent.split(" ")[0]
    )
    setAnimalTypeArr(newList)
  }

  const handleChange = (e) => {
    const {value} = e.target
    setInput(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAnimalTypeArr(oldArr => [...oldArr, input])
  }


    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <ol>
          {animalTypesArr.map((animalType) => {
            return (
              <>
              <li>{animalType} <button onClick={handleDelete}>Delete</button>
              </li>
              </>
            )
          })}
        </ol>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input onChange={handleChange} type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol></ol>
      </section>
    );
  }


export default AnimalTypes;
