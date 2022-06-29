import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";



export default function PetList({allPets}) {

  return (
    <section className="pet-list">
      {/* { console.log(allPets)} */}
      <h4>All Pets</h4>

      <article>
        {" "}
        {allPets.map((pet) => {
          return <Pet name={pet.name} kind={pet.kind} breed={pet.breed} key={pet.id}/>;
        })}
      </article>
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
