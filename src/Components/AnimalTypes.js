import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];


export default function AnimalTypes(){
  const [animalTypesList,setAnimalTypesList] = useState(animalTypes.reduce((acc,pv)=>({...acc,[pv]:1}),{}));

  ////////event//////////////////////
  const handleOnSubmit = (evt) =>{
    evt.preventDefault();
    let inputed = evt.target['animal-type'].value.toLowerCase().replace(/[^a-z]*/g,"");
    setAnimalTypesList(pv=>({...pv,[inputed]:1}));
    evt.target['animal-type'].value = "";
  }
  const handleRemoveAnimalType = (type)=>{
    delete animalTypesList[type];
    setAnimalTypesList({...animalTypesList});
  }

  //////////////////////////////
  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol>
        {Object.keys(animalTypesList).map(el=><li key={el}>{el}<button onClick={()=>{handleRemoveAnimalType(el)}}>❌</button></li>)}
      </ol>
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
