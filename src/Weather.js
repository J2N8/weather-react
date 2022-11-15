import React from "react";
import axios from "axios";


export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Tampa is ${response.data.main.temp}°F`);
  }
  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tampa&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello Weather</h2>;
}