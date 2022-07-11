import React, {useState} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  let [animalArr, setAnimalArr] = useState(animalTypes);
  const onClicky = (ev) => {
    const remove = ev.target.parentNode.innerText;
    const filter = animalArr.filter((animal) => animal !== remove)
    setAnimalArr(filter);
  }

  const submit = (ev) => {
    ev.preventDefault();
    const input = ev.target.search.value;
    (!animalArr.includes(input)) && (animalArr = animalArr.concat([input]));
    setAnimalArr(animalArr);
    ev.target.reset();
  }

  const animalMap = animalArr.map((animal) => {
    return (
      <li>
        {animal}
        <button onClick={onClicky} value="-"></button>
      </li>
    )
  })

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={submit}>
          <label htmlFor="type">
            <input type="text" id="animal-type" name="search" />
          </label>
          <input type="submit" />
        </form>
        <ol>
          {animalMap}
        </ol>
      </section>
    );
}

export default AnimalTypes;
