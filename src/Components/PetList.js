import React from 'react'
import {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = 'https://vet-lab-8-4.herokuapp.com/api/pets';


const PetList = () => {
  
  const [animalInfo, setAnimalInfo] = useState([])
  
  const fetchAnimals = async () => {

    try {
      const response = await fetch(BASE_URL)
      const data = await response.json()
      setAnimalInfo(data)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(animalInfo)

  useEffect(() => {
    fetchAnimals()
    
  }, [])
  const petList = animalInfo.map((pet, i) => {
    return (
      <Pet key={i} pet={pet} />
     
    );
  });

  
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{petList}</article>
    </section>
  );
}

export default PetList