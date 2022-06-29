import React, {useState, useEffect} from "react";
import AnimalTypes from "./Components/AnimalTypes";
import FirstPet from "./Components/FirstPet";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NewClient from "./Components/NewClient";
import NumberOfPets from "./Components/NumberOfPets";
import PetList from "./Components/PetList";


const BASE_URL = "https://vet-lab-8-4.herokuapp.com/api"; 

const App = () => {
  const [getPets, setGetPets] = useState([])
  useEffect(() => {
    fetch(`${BASE_URL}/pets`)
    .then((res) => res.json())
    .then((data) => setGetPets(data))
    .catch((err) => console.log(err))
  },[])
  return (
    <>
      <NavBar />
      <main>
        <FirstPet />
        <NumberOfPets />
        <NewClient />
        <AnimalTypes />
        <PetList getPets={getPets}/>
      </main>
      <Footer />
    </>
  );
};

export default App;
