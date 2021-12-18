import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const PetList = () => {

  const [useAnimalInfo , setAnimalInfo] = useState(null)

  useEffect(()=> {
    async function fetchData() {
        const {data} = await axios.get(BASE_URL + "/pets")
        const animals = data.map((el, i) => {
        return <Pet key={i} pet={el}/>
      })

      setAnimalInfo(animals)
    }
    fetchData()
  }, [])
  
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
