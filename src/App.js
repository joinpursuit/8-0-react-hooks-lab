import {React, useState} from "react";
import AnimalTypes from "./Components/AnimalTypes";
import FirstPet from "./Components/FirstPet";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NewClient from "./Components/NewClient";
import NumberOfPets from "./Components/NumberOfPets";
import PetList from "./Components/PetList";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const App = () => {
  const [firstPet, setFirstPet] = useState(false);
  const [numOfPets, setNumOfPets] = useState(0);
  const [updatedPets, setUpdatedPets] = useState(animalTypes);

  return (
    <>
      <NavBar />
      <main>
        <FirstPet firstPet={firstPet} setFirstPet={setFirstPet}/>
        <NumberOfPets numOfPets={numOfPets} setNumOfPets={setNumOfPets}/>
        <NewClient />
        <AnimalTypes updatedPets={updatedPets} setUpdatedPets={setUpdatedPets}/>
        <PetList />
      </main>
      <Footer />
    </>
  );
};

export default App;
