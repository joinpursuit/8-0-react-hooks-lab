import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useEffect, useState } from "react";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList=()=>{
  const[pets, setPets]= useState([])

    useEffect(()=>{
      handleFetch();
    },[]);
    const handleFetch=()=>{
      fetch(BASE_URL)
      .then((res)=> res.json())
      .then(data =>{
        setPets(data)
      })
    }
    let petList = pets.map(pet =>{
      return (
          <Pet
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            kind={pet.kind}
          />
      
      )
    })
      return (
      <section className="pet-list">
        <h4>All Pets</h4>
          <article>{petList}</article>
      </section>
    );
}


export default PetList;
