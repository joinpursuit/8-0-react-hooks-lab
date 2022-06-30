import { useState } from 'react';
import './AnimalTypes.css';

const animalTypes = ['dog', 'cat', 'ferret', 'bird', 'fish', 'snake', 'lizard'];

const AnimalTypes = () => {
  const [input, setInput] = useState('');
  const [animalType, setAnimalType] = useState(animalTypes);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!animalType.includes(input)) {
      setAnimalType([...animalType, input]);
      setInput('')
    }
    
  };

  const handleDelete = (event) => {
    setAnimalType(() => {
      return animalType.filter((input) => input !== event.target.id);
    });
  };

  const listOfAnimals = animalType.map((animal) => {
    return (
      <li key={animal}>
        {animal}
        <button onClick={handleDelete} id={animal}>
          {' '}
          Remove
        </button>
      </li>
    );
  });

  return (
    <section className={'animal-types'}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='type'>
          <input
            type='text'
            id='animal-type'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <input type='submit' />
      </form>
      <ol> {listOfAnimals} </ol>
    </section>
  );
};

export default AnimalTypes;

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
