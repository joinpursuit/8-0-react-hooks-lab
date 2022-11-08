import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

//  class AnimalTypes extends React.Component {
//    render() {
//      return (
//        <section className={"animal-types"}>
//          <h4>Animal Types</h4>
//          <form>
//            <label htmlFor="type">
//              <input type="text" id="animal-type" />
//            </label>
//            <input type="submit" />
//          </form>
//          <ol></ol>
//        </section>
//      );
//    }
//  }
// 1 convert to a functional component
// 2. create state for all animals and default it to the animal types array
// 3. render the allAnimals piece of state
// 4. creaate state for animal type input field
// 5. create a function to be called onchange for the input field
// 6. create an onsubmit function for the form elemant
// 7. in the handlesubmit function -
//    a. trim any white space from the String
//    b. have logic to not add an existing anaimal to the Array
// 8. add a function and a button to remove an animal

const AnimalTypes = () => {
  const [allOfEm, setAllOfEm] = useState(animalTypes);
  const [inputType, setInputType] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInputType(e.target.value);
 }

 function submitForm(e){
  e.preventDefault();
// .trim allows for user to input with spaces at end or beginning
// if the input doesn't include any of the animals in the animaltype array to add that inputted animal to the list 
    if (!allOfEm.includes(inputType.trim())){
      setAllOfEm([...allOfEm, inputType])
    }
  }
 // button to remove animal from the list of animaltypes , 1 is to just remove the animal of chose
  function remove(index){
      allOfEm.splice(index, 1);
      setAllOfEm([...allOfEm]);
    }
  

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={submitForm}>
        <label htmlFor="type">
          <input type="text" id="animal-type" onChange={handleChange}/>
        </label>
        <input type="submit" />
      </form>
      <ol>
        {allOfEm.map((a, index) => {
          return (
            <li>
              {a}
              <button onClick={() => remove(index)}>-</button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default AnimalTypes;
