import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/pets";

const PetList = () => {
  const [ petList, setPetList ] = useState([]);

  useEffect(() => {
    axios
    .get(BASE_URL)
    .then(response => setPetList(response.data))
  })

  return (
    <section className="pet-list container">
      <h4>All Pets</h4>
      {petList.map((pet, index) => {
        return <Pet key={index} name={pet.name} kind={pet.kind} breed={pet.breed}/>
      })}
    </section>
  );
}

export default PetList;
