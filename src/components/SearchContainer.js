import React, { useState } from "react";
import axios from "axios";

export default function SearchContainer(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/04d@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
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
  } else {
    search();
    return "Loading...";
  }
}
