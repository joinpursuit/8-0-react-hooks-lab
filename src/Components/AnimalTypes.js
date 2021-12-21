import React, {useState} from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  let [animalArr, setAnimalArr] = useState(animalTypes);
  const onClicky = (ev) => {
    const remove = event.target.parentNode.innerText;
    const filter = animalArr.filter((animal) => animal !== remove)
    setAnimalArr(filter);
  }
  render() {
    return (
      
    );
  }
}

export default AnimalTypes;
