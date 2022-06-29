import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-lab-8-4.herokuapp.com/api/pets";


export default function PetList() {

  const [pets, setPets] = useState([]);

useEffect(() => {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      setPets(data)
    })
})

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        <Pet pets={ pets }/>
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

// export default PetList;
