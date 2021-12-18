
const Test =({index, removeAnimal, animal, reset}) => {
 
    return (
        <li>
        <p>{animal}</p>
        <button id={index} onClick={removeAnimal} >Remove</button>
        <button onClick={reset} >Reset</button>
        </li>
    );
  
}

export default Test;
