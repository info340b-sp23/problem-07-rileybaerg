import React from 'react';
import { useState } from 'react';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import PetList from './PetList';

function App(props) {
  const [pets, setPets] = useState(props.pets);

  const handleAdopt = (name) => {
    const updatedPets = pets.map((pet) => {
      if (pet.name === name) {
        return { ...pet, adopted: true };
      }
      return pet;
    });
    setPets(updatedPets);
  };

  const uniqueBreeds = [...new Set(props.pets.map(pet => pet.breed))];

  return (
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <BreedNav breeds={uniqueBreeds} />
            <AboutNav />
          </div>
          <div id='petList' className='col-9'>
            <PetList pets={pets} onAdopt={handleAdopt} />
          </div>
        </div>
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}

export default App;
