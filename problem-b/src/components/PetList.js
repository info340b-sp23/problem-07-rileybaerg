import React from 'react';

function PetList({ pets, onAdopt }) {
  function PetCard({ petData }) {
    const handleClick = () => {
      onAdopt(petData.name);
    };

    return (
      <div className='card' onClick={handleClick}>
        <img className='card-img-top' src={petData.img} alt={petData.name} />
        <div className='card-body'>
          <h3 className='card-title'>{petData.adopted ? petData.name + ' (Adopted)': petData.name}</h3>
          <p className='card-text'>{petData.sex} {petData.breed}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2>Dogs for Adoption</h2>
      <div className='card-deck'>
        {pets.map((pet) => (
          <PetCard key={pet.id} petData={pet} />
        ))}
      </div>
    </>
  );
}

export default PetList;