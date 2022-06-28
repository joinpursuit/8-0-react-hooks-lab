import React from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

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

export default function PetList() {
  return (
    <section className="pet-list">
             <h4>All Pets</h4>
             {/* render pet.js */}
            <article></article>
    </section>
  )
}

