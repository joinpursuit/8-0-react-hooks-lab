import Pet from "./Pet";
import React, { useEffect, useState } from "react";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";


//class PetList extends React.Component {
 // render() {
  //  return (
   //   <section className="pet-list">
 //       <h4>All Pets</h4>
  //      <article></article>
   //   </section>
  //  );
 // }
//}

function PetList () {
  const [pets,setPets] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/pets`)
      .then((response) => response.json())
      .then((data) => setPets(data));
  },[]);
    
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          {pets.map((pet) => <Pet name={pet.name} kind={pet.kind} breed={pet.breed}/>)} 
        </article>
      </section>
    );
  }

export default PetList;
