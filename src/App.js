import React from "react";
import SearchContainer from "./SearchContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchContainer defaultCity="Tampa" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/jasmine-poole-421b101b7/"
            target="_blank"
            className="linkedIn"
            rel="noopener noreferrer"
          >
            Jasmine Poole
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/J2N8/weather-react"
            target="_blank"
            className="github"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          <a
            href="https://weatherapp2-reactjs.netlify.app/"
            target="_blank"
            className="netlify"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
