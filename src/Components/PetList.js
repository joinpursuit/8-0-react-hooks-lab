import React,{useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

// const BASE_URL = "https://vet-lab-8-4.herokuapp.com/api";

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


const PetList = ({getPets}) => {
// const [getPets, setGetPets] = useState([])
//   useEffect(() => {
//     fetch(`${BASE_URL}/pets`)
//     .then((res) => res.json())
//     .then((data) => setGetPets(data))
//     .catch((err) => console.log(err))
//   },[])
  return (
          <section className="pet-list">
            <h4>All Pets</h4>
            <article>
              {getPets.map((pet) => {
                return <Pet name={pet.name} kind={pet.kind} breed={pet.breed}/>
              })}
            </article>
          </section>
        );
      }




export default PetList;
