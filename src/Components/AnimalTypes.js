import React from "react";
import { useState } from "react/cjs/react.development";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [ userInput, setUserInput ] = useState('');
  const [ allAnimalTypes, setAnimalTypes] = useState(animalTypes);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  }

  const handleAddAnimal = (e) => {
    e.preventDefault();
    if(!allAnimalTypes.includes(userInput.trim())){
      setAnimalTypes([...allAnimalTypes, userInput]);
    }
  }

  const handleRemoveAnimal = (e) => {
    setAnimalTypes(allAnimalTypes.filter(animal => {
      return animal !== e.target.value;
      })
    )
  }

  let animalTypesArr = allAnimalTypes.map(animal => {
    return <li value={animal} >{animal}<button value={animal} onClick={handleRemoveAnimal}>-</button></li>
  })

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleAddAnimal}>
        <label htmlFor="type">
          <input type="text" id="animal-type" onChange={handleUserInput}/>
        </label>
        <input type="submit"/>
      </form>
      <ol>{animalTypesArr}</ol>
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
