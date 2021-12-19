import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet"
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

const PetList = () => {

  const [animal, setAnimal] = useState([]);


  useEffect(() => {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((animals) => {
        setAnimal(...animal, animals)
      })
      .catch((error) => console.log(error))
  }, [])


  const eachAnimalDeets = animal.map((eachAnimal) => {
    return <Pet name={eachAnimal.name} breed={eachAnimal.breed} kind={eachAnimal.kind} />
  })


  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      {eachAnimalDeets}
    </section>
  );
}


export default PetList;
