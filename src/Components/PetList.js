import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {

  const [ allPets, setAllPets ] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((pets) => setAllPets(pets))
    .catch(console.log) 
  },[])
    // the empty array stops the function from running on update

  const results = allPets.map(({id,name,breed, kind}) => <Pet key={id} name={name} breed={breed} kind={kind} />)

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{results}</article>
    </section>
  );
}

export default PetList;
