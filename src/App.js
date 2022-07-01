import React from 'react';
import AnimalTypes from './Components/AnimalTypes';
import FirstPet from './Components/FirstPet';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import NewClient from './Components/NewClient';
import NumberOfPets from './Components/NumberOfPets';
import PetList from './Components/PetList';

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <FirstPet />
        <NumberOfPets />
        <NewClient />
        <AnimalTypes />
        <PetList />
      </main>
      <Footer />
    </>
  );
};

export default App;
