import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useState, useEffect } from "react";

const BASE_URL = "https://vet-resource-api-9-2.herokuapp.com/api/pets`";

// class PetList extends React.Component {
//   render() {
//     return (
//       <section className="pet-list">
//         <h4>All Pets</h4>
//         <article></article>
//       </section>
//     );
//   }
// }

function PetList() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = "https://vet-resource-api-9-2.herokuapp.com/api/pets";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  // post.map((animal)=>setAnimalType(animal.kind))
  // function handleChange(e) {
  //   const newAnimal = { ...post,[e.target.id]:e.target.value };
  //   // newClient[e.target.id] = e.target.value;
  //   setClient(newAnimal);
  // }
console.log(post)
  return (
    <section>
      <h4><strong>All Pets</strong></h4>
      <article>{post.map(anime=>{
return(
  <div className="pet-list" key={anime.id}>
    <div><br/>______________________
    <br/>Animal Name: {anime.name}
    <br/>Animal Species: {anime.kind}
    <br/>Animal Breed: {anime.breed}
   <br/> ______________________
</div>
  </div>
)

      })}</article>
    </section>
  );
}

export default PetList;
