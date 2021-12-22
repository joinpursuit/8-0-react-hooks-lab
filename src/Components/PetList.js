import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

const PetList = () => {
  const [ pets, setPets ] = useState([]);

  useEffect(()=>{
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then(res => res.json())
      .then((data)=>{
        setPets(data);
      })
  }, [])

  let allPets = pets.map(pet => {
    return <Pet name={pet.name} breed={pet.breed} type={pet.type}/>
  })

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{allPets}</article>
    </section>
  );
}

// class PetList extends React.Component {
//   render() {
//     return (
//       <section className="pet-list">
//         <h4>All Pets</h4>
//         <article></article>
//       </section>
//     );
//   }
// }

export default PetList;
