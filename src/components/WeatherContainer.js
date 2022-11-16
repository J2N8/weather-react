import React, { useState } from "react";
import axios from "axios";

export default function WeatherContainer(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      dateTime : "Wednesday 07:00",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/04d@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weatherContentContainer">
        <div className="currentCityContainer">
          <div className="Row">
            <div className="cityWeather Col">
              <span className="cityName" id="City">
                {weatherData.city}
              </span>
              <br />
              <span className="currentTime" id="DateLine">
                {weatherData.dateTime}
              </span>
              <br />
              <span className="weatherDescription" id="Description">
                {weatherData.description}
              </span>
              <br />
              <div className="weatherTemperature">
                <span className="currentTemp" id="mainTemp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="Units">
                  <a
                    href="/"
                    onClick="{showFahrenheit}"
                    id="fahrenheitLink"
                    className="linkActive"
                  >
                    °F
                  </a>
                  |
                  <a href="/" onClick="{showCelsius}" id="celsiusLink">
                    °C
                  </a>
                </span>
              </div>
            </div>
            <div className="currentWeatherIcon">
              <img src={weatherData.iconUrl} id="icon" alt={weatherData.description} />
            </div>
            <div className="currentWeatherDetails">
              <ul>
                <div className="Humidity">
                  <li className="">
                    Humidity: <span id="Humidity">{weatherData.humidity}</span>%
                  </li>
                </div>
                <div className="cWind">
                  <li>
                    Wind: <span id="Wind">{weatherData.wind}</span> km/h
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="cityNextTempContainer" id="Forecast"></div>
      </div>
    );
  } 
  else 
  {
      const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
      return "Loading...";
  }
}