import React, { useState } from "react";
import WeatherContainer from "./WeatherContainer";
import axios from "axios";
import "./App.css";

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
      iconUrl: response.data.weather[0].icon,
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
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="searchContainer">
        <form onSubmit={handleSubmit} id="searchForm">
          <input
            type="search"
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
        <br/ >
        <WeatherContainer data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
