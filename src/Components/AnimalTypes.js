import React, { useState } from "react";
import "./AnimalTypes.css";

 const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {

  const [input, setInput] = useState("")
  const [typeList, setTypeList] = useState(animalTypes)

  const handleSubmit = (e) => {
   e.preventDefault()
   if (!typeList.includes(input)){
     setTypeList([...typeList, input])
   }
  }

  const remove=(e)=>{
    setTypeList(()=>{
      return typeList.filter((animal)=>{
       return animal !== e.target.id
      }
      )
    })
  }
  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input type="text" onChange={(e) => setInput(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
     
      <ol>
        {typeList.map((animal) => {
          return (
            <li>{animal}
             <button onClick={remove} id={animal}>remove</button>
             </li> 
          )
        })}
      </ol>
    </section>
  )
}

export default AnimalTypes

