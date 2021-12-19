import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useState, useEffect } from "react"

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api";

const PetList = () => {
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(`${BASE_URL}/pets`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const displayData = data.map((pet) => {
    return (
      <Pet 
        key={pet.id} 
        name={pet.name} 
        kind={pet.kind} 
        breed={pet.breed} 
      />
    )
  })

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{displayData}</article>
    </section>
  );
}

export default PetList;
