import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherContainer(props) {
    return (
      <div className="weatherContentContainer">
        <div className="currentCityContainer">
          <div className="Row">
            <div className="cityWeather Col">
              <span className="cityName" id="City">
                {props.data.city}
              </span>
              <br />
              <span className="currentTime" id="DateLine">
                <FormattedDate date={props.data.date} />
              </span>
              <br />
              <span className="weatherDescription" id="Description">
                {props.data.description}
              </span>
              <br />
              <div className="weatherTemperature">
                <span className="currentTemp" id="mainTemp">
                  {Math.round(props.data.temperature)}
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
              <img
                src={props.data.iconUrl}
                id="icon"
                alt={props.data.description}
              />
            </div>
            <div className="currentWeatherDetails">
              <ul>
                <div className="Humidity">
                  <li className="">
                    Humidity: <span id="Humidity">{props.data.humidity}</span>%
                  </li>
                </div>
                <div className="cWind">
                  <li>
                    Wind: <span id="Wind">{props.data.wind}</span> km/h
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