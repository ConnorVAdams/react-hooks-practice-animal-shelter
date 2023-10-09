import { useState } from "react";

function Pet({ id, type, gender, age, weight, name }) {
  const [adopted, setAdopted] = useState('')
  
  const handleAdopt = ({ target: { id } }) => {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isAdopted: true
      })
    })
    .then(resp => resp.json())
    .then(adopted => setAdopted(true))
  }
  
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'female' ? '♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={adopted ? 'ui button' : "ui disabled button"}>Already adopted</button>
        <button id={id} onClick={handleAdopt} className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;