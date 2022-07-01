
import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

function PetList() {
  const fetchData = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const displayData = data.map((petData, index) => {
    const { name, kind, breed } = petData;
    return <Pet key={index} name={name} kind={kind} breed={breed} />;
  });
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{displayData}</article>
    </section>
  );
}

export default PetList;
