import React from "react";

function Filters({ filters, onFilterChange }) {
  
  const handleFilterChange = ({ target: { value } }) => {
    onFilterChange(value)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={handleFilterChange} name="type" id="type" aria-label="type" value={filters}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;