import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-lab-8-4.herokuapp.com/api/pets";

const PetList=() => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
   
    .then((data) => setPetData(data))
    
    .catch((error) => console.log(error));
  }, []);
    return (

      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          {petData.map(pet => {
            return <Pet name={pet.name} breed={pet.breed} kind={pet.kind}/>
          })}
        </article>
      </section>
    );
  }


export default PetList;
