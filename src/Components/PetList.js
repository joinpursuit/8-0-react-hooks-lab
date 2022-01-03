import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useEffect, useState } from "react";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList=()=>{
  const[petList, setpetList]= useState([])

    useEffect(()=>{
      handleFetch();
    },[]);
    const handleFetch=()=>{
      fetch(BASE_URL)
      .then((res)=> res.json())
      .then(data =>{
        setpetList(data)
      })
    }
    let pets = petList.map((pet)=>{
      return (
        <div>
          <Pet
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            kind={pet.kind}
          />
        </div>
      )
    })
      return (
      <section className="pet-list">
        <h4>All Pets</h4>
          {pets}
      </section>
    );
}


export default PetList;
