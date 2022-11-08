import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

// class PetList extends React.Component {
//   render() {
//     return (
//       <section className="pet-list">
//         <h4>All Pets</h4>
//         <article>{/* render animals here */}</article>
//       </section>
//     );
//   }
// }
//1. Convert to funtional component
//2. Create a state to hold an array of pets from the api call. Default to an empty array.
//3. UseEffect to make an api call and set the state for petsArray to the response
//4. map over the array of animals in the article and render a <pet> component for each. dont forget to pass the right props to <pet>

const PetList = () => {
  const BASE_URL = "https://vet-resource-api-9-2.herokuapp.com/api/pets";
  const [list, setlist] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((Data) => setlist(Data));
  }, []);

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
          {list.map((d) => {
            return <Pet name={d.name} breed={d.breed} kind={d.kind} />;
          })}
      </article>
    </section>
  );
};

export default PetList;
