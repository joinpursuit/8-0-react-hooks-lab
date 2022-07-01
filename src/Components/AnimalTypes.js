import React, {useState} from "react";
import "./AnimalTypes.css";

// const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

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

// export default AnimalTypes;


function AnimalTypes() {

  const [animalTypes, setAnimalTypes] = useState(["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"])
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setAnimalTypes([ ...animalTypes, value])
    //setAnimalTypes(...new Set(animalTypes))
    
  }
  console.log(...new Set(animalTypes))
  console.log(value)
  return (
    <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input onChange={(e) => setValue(e.target.value)} value={value} type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol>
         {animalTypes.map((animal) => <li>{animal}<button onClick={e => animalTypes.splice((animalTypes.indexOf(e.target.value)),1)}>-</button></li>)}
        </ol>
      </section>
  )
}

export default AnimalTypes
