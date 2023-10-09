import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(resp => resp.json())
    .then(data => setPets(data))
  }, [])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} onFilterChange={handleFilterChange} />
          </div>
          <div className="twelve wide column">
            <PetBrowser filters={filters} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;