import './AnimalTypes.css';
import { useState } from 'react';
const animalTypes = ['dog', 'cat', 'ferret', 'bird', 'fish', 'snake', 'lizard'];

const AnimalTypes = () => {
  const [types, setTypes] = useState(animalTypes);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target['animal-type'].value;
    const newList = [input, ...types];
    setTypes(newList);
  };

  const removeType = (event) => {
    const index = Number(event.target.value);
    const newList = types.reduce(
      (acc, val, i) => (i === index ? acc : [...acc, val]),
      []
    );
    setTypes(newList);
  };

  const typeList = types.map((type, i) => (
    <li>
      {type}
      <button onClick={removeType} value={i}>
        -
      </button>
    </li>
  ));

  return (
    <section className={'animal-types'}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>{typeList}</ol>
    </section>
  );
};

export default AnimalTypes;
