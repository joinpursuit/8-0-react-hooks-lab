import React, {useState, useEffect} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];


export default function AnimalTypes() {

  const [animalList, setAnimalList] = useState(animalTypes)
  const [input, setInput] = useState("")

  useEffect(()=> {
    setAnimalList(animalTypes)
  })


  const handleSubmit = (e)=> {
    e.preventDefault()
    animalTypes.push(input)
    console.log(animalTypes)
  }



  const handleChange = (e)=>{
    e.preventDefault()
    setInput( e.target.value )
  }

  return (
    <div>
       <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input type="text" id="animal-type" value={input} onChange={handleChange}/>
          </label>
          <input type="submit" />
        </form>
        <ol>
          {animalList.map((animal) => {
            return <li>{animal} <button>X</button></li>
          })}
        </ol>
      </section>
    </div>
  )
}

