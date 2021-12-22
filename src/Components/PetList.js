import {useEffect,useState} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

function PetList () {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setPetData(data))
  }, []);

  let lists = petData.map(pet => {
    return <Pet key={pet.id} name={pet.name} breed={pet.breed} kind={pet.kind} />
  })

  return (
    <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          <ol>{lists}</ol>
        </article>
      </section>
  )
}

// const BASE_URL = "http://localhost:5000/api";
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

export default PetList;
