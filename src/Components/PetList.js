import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api/pets";

const PetList = () => {
  const [ petInfo, setPetInfo ] = useState([])
  
  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => setPetInfo(data))
    .catch((error) => { 
      throw error })
    },[])

  let Pets = petInfo.map((pet) => <Pet name={pet.name} breed={pet.breed} kind={pet.kind} />)

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{Pets}</article>
      </section>
    );
  }


export default PetList;
