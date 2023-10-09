import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, filters }) {

  const petsToDisplay = pets
  .filter(pet => filters === 'all' ? pet : pet.type === filters)
  .map(pet => {
    return <Pet key={pet.id} {...pet} />
  })
  return <div className="ui cards">{petsToDisplay}</div>;
}

export default PetBrowser;