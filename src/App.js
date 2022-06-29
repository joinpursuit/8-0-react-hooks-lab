import AnimalTypes from "./Components/AnimalTypes";
import FirstPet from "./Components/FirstPet";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NewClient from "./Components/NewClient";
import NumberOfPets from "./Components/NumberOfPets";
import PetList from "./Components/PetList";
import React,{ useState,useEffect } from "react";

const App = () => {
  const [petProfile, setPetProfile] = useState([]);
  useEffect(() => {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets`)
      .then((response) => response.json())
      .then((pets) => {
        setPetProfile(pets);
        console.log(petProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <NavBar />
      <main>
        <FirstPet />
        <NumberOfPets />
        <NewClient />
        <AnimalTypes />
        <PetList petProfile = {petProfile} />
      </main>
      <Footer />
    </>
  );
};

export default App;
