import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

export default function AnimalTypes() {
  const [ petsArr, setPetsArr ] = useState(animalTypes);
  const [ userInput, setUserInput] = useState("");

  const handleOnChange = (e) => setUserInput(e.target.value);

  const handleRemoveOnClick = (e) => {
    let animalToRemove = e.target.value
    let filtered = petsArr.filter((animal) => animal !== animalToRemove);
    setPetsArr(filtered)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isIncluded = petsArr.includes(userInput)
    setPetsArr(!isIncluded ? [userInput, ...petsArr] : petsArr)
  }

  const animalElArr = petsArr.map((animal, i) => (
    <li key={i} >
      {animal}
      <button onClick={(e) => handleRemoveOnClick(e)} value={animal}>-</button>
    </li>
  ));

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="type">
          <input onChange={(e) => handleOnChange(e)} type="text" id="animal-type" value={userInput} />
        </label>
        <input type="submit" />
      </form>
      <ol>{animalElArr}</ol>
    </section>
  )
}


// class AnimalTypes extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       animalsTypeArr: animalTypes,
//       userInput: ""
//     }
//   }

//   handleOnChange = (e) => {
//     // const { name, value } = e.target
//     this.setState({
//       userInput: e.target.value
//     })
//   }

//   handleRemoveClick = (e) => {
//     const animalToRemove = e.target.value
//     const { animalsTypeArr } = this.state;
//     let filtered = animalsTypeArr.filter((animal) => animal !== animalToRemove);
//     this.setState({
//       animalsTypeArr: filtered,
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { animalsTypeArr, userInput } = this.state;
//     let isIncluded = animalsTypeArr.includes(userInput) 
//     console.log(isIncluded)
//     this.setState({
//       animalsTypeArr: !isIncluded ? [userInput, ...animalsTypeArr] : animalsTypeArr
//     }) 
//     e.target.reset()
//   }

//   render() {
//     const { animalsTypeArr } = this.state;
//     const animalElArr = animalsTypeArr.map((animal, i) => (
//         <li key={i} >
//           {animal}
//           <button onClick={this.handleRemoveClick} value={animal}>-</button>
//         </li>
//     ));
//     console.log(this.state.userInput);
//     return (
//       <section className={"animal-types"}>
//         <h4>Animal Types</h4>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="type">
//             <input onChange={this.handleOnChange} type="text" id="animal-type" value={this.state.userInput} />
//           </label>
//           <input type="submit" />
//         </form>
//         <ol>{animalElArr}</ol>
//       </section>
//     );
//   }
// }

// export default AnimalTypes;
