import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com";

const PetList = () => {
  
  const [allPets, setAllPets] = useState([]);
  
  useEffect(() => {
  fetch(BASE_URL + '/api/pets')
  .then(response => response.json())
  .then((pets) => setAllPets(pets))
  //fetching info from api then taking an array of obj in order to set the states
    
  }, []) //empty brackets prevent useEffect from constantly calling itself, works similar to componentDidMount().

  const results = allPets.map(({name, breed, kind, id}) => <Pet key={id} name={name} breed={breed} kind={kind} />)
  //destructuring
  //passing pet as a prop, setting key then using info from pet.js

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{results}</article>
      </section>
    );
}

export default PetList;
