import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";
import axios from "axios";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://raw.githubusercontent.com/joinpursuit/resource-veterinarian-api/main/data/db.json";

const PetList = () => {

  const [useAnimalInfo , setAnimalInfo] = useState(null)

  useEffect(async ()=> {
    const {data: {pets}} = await axios.get(BASE_URL)

    const animals = pets.map((el, i) => {
     return <Pet key={i} pet={el}/>
  })

    setAnimalInfo(animals)
  }, [])
  
  console.log(useAnimalInfo)
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          {useAnimalInfo}
        </article>
      </section>
    );
}

export default PetList;
