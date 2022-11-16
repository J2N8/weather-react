import React, { useState } from "react";

export default function WeatherContainer(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(((props.temperature - 32) * 5) / 9));
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="weatherContentContainer">
      <div className="currentCityContainer">
        <div className="Row">
          <div className="cityWeather Col">
            <span className="cityName" id="City">
              {props.city}
            </span>
            <br />
            <span className="currentTime" id="DateLine">
              {props.time}
            </span>
            <br />
            <span className="weatherDescription" id="Description">
              {props.description}
            </span>
            <br />
            <div className="weatherTemperature">
              <span className="currentTemp" id="mainTemp">
                {temperature}
              </span>
              <span className="Units">
                <a
                  href="/"
                  onClick={showFahrenheit}
                  id="fahrenheitLink"
                  className="linkActive"
                >
                  °F
                </a>
                |
                <a href="/" onClick={showCelsius} id="celsiusLink">
                  °C
                </a>
              </span>
            </div>
          </div>
          <div className="currentWeatherIcon"></div>
          <div className="currentWeatherDetails">
            <ul>
              <div className="Humidity">
                <li className="">
                  Humidity: <span id="Humidity">{props.humidity}</span>%
                </li>
              </div>
              <div className="cWind">
                <li>
                  Wind: <span id="Wind">{props.wind}</span> km/h
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
