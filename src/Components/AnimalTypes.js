import React from "react";
import "./AnimalTypes.css";
import {useState} from 'react'

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes=()=>{
  const[animalList, setanimalList] = useState(animalTypes)
  const[inputAnimal, setinputAnimal] = useState("")


  const submitAnimal=(e)=>{
    e.preventDefault()

    setanimalList([...animalTypes,e.target.value])
  }


  let listedAnimals = animalList.map((animal)=>{
    return <li>{animal}</li>
  })
    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form>
          <label htmlFor="type">
            <input onSubmit={submitAnimal} value={inputAnimal}type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol>{listedAnimals}</ol>
      </section>
    );
}
// class AnimalTypes extends React.Component {
//   render() {
//     return (
//       <section className={"animal-types"}>
//         <h4>Animal Types</h4>
//         <form>
//           <label htmlFor="type">
//             <input type="text" id="animal-type" />
//           </label>
//           <input type="submit" />
//         </form>
//         <ol></ol>
//       </section>
//     );
//   }
// }

export default AnimalTypes;
