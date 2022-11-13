// import React from "react";
import "./AnimalTypes.css";
import { useEffect, useState } from "react";
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
// AnimalTypes.js

// function AnimalTypes(){
//   fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets").then((response) => response.json())
//   .then((data) => {
// const[animalData, setAnimalData]=useState(data)
// console.log(animalData)
//   return(
//     <section className={"animal-types"}>
//     <h4>Animal Types</h4>
//     <form>
//       <label htmlFor="type">
//         <input type="text" id="animal-type" />
//       </label>
//       <input type="submit" />
//     </form>
//     <ol></ol>
//   </section>
//   )})
// }

function AnimalTypes() {
  //   const[post,setPost] = useState([])
  // const [animalType,setAnimalType]=useState([])
  //   useEffect(()=>{
  //   const url = "https://vet-resource-api-9-2.herokuapp.com/api/pets";
  //   fetch(url).then(response=>response.json()).then(data=>setPost(data))
  //   },[])

  // post.map((animal)=>setAnimalType(animal.kind))
  // function handleChange(e) {
  //   const newAnimal = { ...post,[e.target.id]:e.target.value };
  //   // newClient[e.target.id] = e.target.value;
  //   setClient(newAnimal);
  // }

  // 1. convert to a functional component
  // 2. create state for all animals and default it to the animalTypes array
  // 3. render the allAnimals piece of state
  // 4. create state for animel-type input field
  // 5. create a function to be called onChange for the input feild
  // 6. create an onSubmit function for the form element
  // 7. in the handleSubmit function -
  //  a. trim any white spaces from the string
  //  b. have logic to not add an existing animel to the array
  // 8. add a function and a button to remove an animal

  const [allAnimals, setAllAnimals] = useState(animalTypes);
  const [animalTypeInput, setAnimalTypeInput] = useState("");

  function onCHANGEfunction(event) {
    setAnimalTypeInput(event.target.value);
  }

  function handleSubmit() {
    // e.preventDefault()
    let newINstring = animalTypeInput.trim();

    if (allAnimals.includes(newINstring)) {
      setAnimalTypeInput(newINstring);
    } else {
      animalTypes.push(animalTypeInput);
      setAllAnimals(animalTypes);
    }
  }

  function buttonFunction(anim) {
//  document.getElementsByClassName({className}).forEach(element => {
//   element.remove()
//  });
allAnimals.splice(allAnimals.indexOf(anim),1)

setAllAnimals([...allAnimals])


    }
  
  //ABOVE FROM: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

  // setAllAnimals(allAnimals);

  // const generateKey = (pre) => {
  //   return `${ pre }_${ new Date().getTime() }`;
  // }

  //GENERATE NEW KEY FROM: mhttps://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements

  return (
    <section className={"animal-types"}>
      <h4>All Animals</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="type">
          <input onChange={onCHANGEfunction} type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol className="animal-types">
        {allAnimals.map((anime) => {
          return (
          
              <li key={anime} className={anime}>{anime}
              <button
                className={anime}
                onClick={() => {
                  buttonFunction(anime)
                }}
              >
                Remove This Animal
              </button>
           </li>
          );
        })}
      </ol>
    </section>
  );
}
export default AnimalTypes;
