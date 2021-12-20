import { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";
const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";
const PetList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  const result = data.map((animal) => {
    return <Pet name={animal.name} breed={animal.breed} kind={animal.kind} />;
  });
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{result}</article>
    </section>
  );
};
export default PetList;
