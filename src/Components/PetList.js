import {React, useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

// const BASE_URL = "http://localhost:5000/api";

 function PetList() {
  const [petsData, setPetsData] = useState([])

  const handleFetch=()=>{
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
    .then(res => res.json())
    .then((data)=>{
      setPetsData(data)
    })
  }

  useEffect(() => {
    handleFetch()
  }, [])


  let petArrList = petsData.map((pet)=>{
    return <Pet name={pet.name} breed={pet.breed} kind={pet.kind} />
  })

    return (
      <section className="pet-list">
        <h4>{petArrList}</h4>
        <article></article>
      </section>
    );
}

export default PetList;
