import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Days">
        <p>
          <span class="daysWeekday">{day()}</span>
        </p>
        <br />
        <WeatherIcon code={props.data.weather[0].icon} />
        <p class="daysTemp">
          <span class="forecastMax">{maxTemp()} </span>
          <span class="forecastMin">{minTemp()}</span>
        </p>
      </div>
    </div>
  );
}
