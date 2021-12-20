import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

//this is never called but my test is passing. Ask about that... 

const newAPI = "https://vet-api-8-1.herokuapp.com/api/pets"

//In the readme the alt API for pets is available but since its a group project you can just copy and paste from here.

const PetList = () => {

  const [petsData, setData] = useState([])
  //If this works, its basically asking the useState to be an array think of it like when using that super and the : thing

  useEffect(() =>{
   //Placing useEffect inside the component lets us access the count state variable TBH theres probably another way but I'm sleepy. You don't have to do this. 

   fetch(newAPI)
   .then((res) => res.json())
   .then((data) => setData(data))
   //On friday I was playing around with this with Dylan and Rohan and I remember something about data-data-data and that wont make sense in context but I changed data to petData and this is your regular standard cause the test gets confused. 
   .catch((error) => {
    throw error;
    //this was suggested you don't probably have to use it but I was stuck and it helped. 
  });
}, []);
 //Ask correct syntax for this array cause it might be wrong but its all passing so I don't want to mess with it. 
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
        {petsData.map((pet) => (
          <Pet name={pet.name} breed={pet.breed} kind={pet.kind}/>
        ))}
        </article>
      </section>
    );
  }

export default PetList;
