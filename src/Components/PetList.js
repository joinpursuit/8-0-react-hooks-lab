import React, { useEffect, useState } from 'react';
import Pet from './Pet';
import './PetList.css';

const BASE_URL = 'https://vet-api-8-1.herokuapp.com/api/pets';

function PetList() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let isData = true;
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch(`${BASE_URL}`);
      // convert the data to json
      const json = await response.json();
      setApiData(json);
      // set state with the result
      // if (!isData) setApiData(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  const results = apiData.map((pet, idx) => {
    return <Pet key={idx} name={pet.name} kind={pet.kind} breed={pet.breed} />;
  });
  return (
    <section className='pet-list'>
      <h4>All Pets</h4>
      <article>{results}</article>
    </section>
  );
}

export default PetList;

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
