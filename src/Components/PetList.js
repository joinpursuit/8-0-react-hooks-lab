import React, {useState, useEffect} from "react";
import axios from "axios";
import Pet from "./Pet";
import "./PetList.css";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://raw.githubusercontent.com/joinpursuit/resource-veterinarian-api/main/data/db.json";

const PetList = () => {

  const [animalInfo, setAnimalInfo] = useState(null);
 useEffect(() => {
  async function  fetchData() {
  const {data: {pets}} = await axios.get(BASE_URL)
    const animals =  pets.map((pet, i) => {
      return (<Pet key={i} pet={pet}/>)
    })
    setAnimalInfo(animals)
   }
  
   fetchData()
  }, []);
 

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{animalInfo}</article>
      </section>
    );
  
}

export default PetList;
