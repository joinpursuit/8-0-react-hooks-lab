import {useState} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes (){
  const [input, setInput] = useState("");
  const [finalDisplay, setFinalDisplay] = useState(animalTypes);

  const handleInput =(e)=>{
    let userInput = e.target.value.toLowerCase();
    setInput(userInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!finalDisplay.includes(input)){
      setFinalDisplay([...animalTypes, input]);
    }
  }

  const handleRemove =(e)=> {
    let finalList = finalDisplay.filter(animal => animal !== e.target.value )
    setFinalDisplay(finalList);
  }

  const listOfAnimals = finalDisplay.map((animal,index) => {
    return (
      <li key={index}>
        {animal}
        <button onClick={handleRemove} value={animal}>-</button>
      </li>
    )
  })

  return (
    <section className={"animal-types"}>
    <h4>Animal Types</h4>
    <form onSubmit={handleSubmit}>
      <label htmlFor="type">
        <input type="text" id="animal-type" onInput={handleInput} />
      </label>
      <input type="submit" />
    </form>
    <ol>{listOfAnimals}</ol>
  </section>
  )
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
