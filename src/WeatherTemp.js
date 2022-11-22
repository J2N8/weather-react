import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="currentTemp" id="mainTemp">
        <span className="Temperature"> {Math.round(props.fahrenheit)}</span>
        <span className="Units">
          °F|{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="currentTemp" id="mainTemp">
        <span className="Temperature"> {Math.round(celsius)}</span>
        <span className="Units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
          | °C
        </span>
      </div>
    );
  }
}
