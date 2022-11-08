import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

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

const AnimalTypes = () => {
  const [animals, setAnimals] = useState(animalTypes);
  const [inputType, setInputType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!animals.includes(inputType.trim())) {
      setAnimals([...animals, inputType]);
    }
  };

  const handleDelete = (index) => {
    animals.splice(index, 1);
    setAnimals([...animals]);
  };

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            onChange={(e) => setInputType(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {animals.map((type, index) => {
          return (
            <li key={index}>
              {type}
              <button onClick={() => handleDelete(index)}>-</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

//1.convert to functional comp
//2.create state for all animals. default to animal types
//3.render the allanimals state
//4.create state for animal type input field
//5.create a function to be called onchange for the input field
//6.create onsubmit for the form element
//7.in the submit function - a. trim whitespaces from the string, b.have logic to not add an existing animal to the array
//8.add a function and a button to remove an animal

export default AnimalTypes;
