import React from "react";
import { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

export default function AnimalTypes() {
  const [input, setInput] = useState("");
  const [animalList, setAnimalList] = useState(animalTypes);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!animalList.includes(input)) {
      setAnimalList([...animalList, input])
    }
  };

  const handleDelete = (e) => {
    setAnimalList(() => {
      return animalList.filter((input) => input !== e.target.id);
    });
  };

  const animalMap = animalList.map((animal) => {
      return (
        <li>
          {animal}
          <button onClick={handleDelete} id={animal}>
            Delete
          </button>
        </li>
      );
  });

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input
            type="text"
            id="animal-type"
            onChange={handleChangeInput}
            value={input}
          />
        </label>
        <input type="submit" />
      </form>
      <ol>{animalMap}</ol>
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

// export default AnimalTypes;
