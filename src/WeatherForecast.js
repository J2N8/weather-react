import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&uunits=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="cityNextTempContainer" id="forecast">
      <div className="Row">
        <div class="daysCol Col">
          <div class="Days">
            <p>
              <span class="daysWeekday">Tues</span>
            </p>
            <br />
            <WeatherIcon code="01d" />
            <p class="daysTemp">
              <span class="forecastMax">75° </span>
              <span class="forecastMin">60°</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
