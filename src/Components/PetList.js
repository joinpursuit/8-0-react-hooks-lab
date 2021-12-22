import React, { useState, useEffect }from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

function PetList() {
  const [ data, setData ] = useState([]);

    useEffect(() => {
      fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then(res => res.json())
      .then(data => setData(data))
    }, [])

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
        {data.map((id) => <Pet 
        name={id.name} 
        breed={id.breed}
        kind={id.kind} 
        />
        )}
        </article>
      </section>
    );
  }


export default PetList;
