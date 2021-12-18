import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList =() => {

  const [animalData, setAnimalData] = useState([])


  useEffect(()=> {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => setAnimalData(data));
},[])


const displayCurrentPets = animalData.map((pet, i) => {

      return (
      <Pet 
        key={i + "djaksd"}
        name={pet.name}   
        breed={pet.breed}
        kind={pet.kind}          
      />
    )

})

console.log(animalData)

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          {displayCurrentPets}
        </article>
      </section>
    );

}

export default PetList;
