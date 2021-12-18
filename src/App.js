import React, { useState } from 'react';
import AnimalTypes from './Components/AnimalTypes';
import FirstPet from './Components/FirstPet';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import NewClient from './Components/NewClient';
import NumberOfPets from './Components/NumberOfPets';
import PetList from './Components/PetList';

const App = () => {
  const [isFirstPet, setIsFirstPet] = useState(false);
  const [numOfPets, setNumOfPets] = useState(0);
  const [petsList, setPetsList] = useState([]);
  return (
    <>
      <NavBar />
      <main>
        <FirstPet setIsFirstPet={setIsFirstPet} isFirstPet={isFirstPet} />
        <NumberOfPets setNumOfPets={setNumOfPets} numOfPets={numOfPets} />
        <NewClient />
        <AnimalTypes />
        <PetList petsList={petsList} setPetsList={setPetsList} />
      </main>
      <Footer />
    </>
  );
};

export default App;
