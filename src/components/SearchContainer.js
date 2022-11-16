import React, { useState } from "react";

export default function SearchContainer() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit} id="searchForm">
        <input
          type="text"
          className="inputCity col-sm-8"
          autoComplete="off"
          placeholder="Search Your City"
          id="searchInput"
          onChange={updateCity}
        />
        <button type="submit" className="searchButton">
          SEARCH
        </button>
        <span className="locator">
          <button
            type="submit"
            className="locationButton"
            title="finding location"
            id="locatorButton"
          >
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/045/548/original/location.png?1662398089"
              alt="finding location"
            />
          </button>
        </span>
      </form>
    </div>
  );
}
