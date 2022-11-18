import React from "react";

let linkedIn = (
  <a
    href="https://www.linkedin.com/in/jasmine-poole-421b101b7/"
    target="_blank"
    className="linkedIn"
  >
    Jasmine Poole
  </a>
);

let getHub = (
  <a
    href="https://github.com/J2N8/weather-react"
    target="_blank"
    className="github"
  >
    open-sourced on GitHub
  </a>
);

let Netlify = (
  <a
    href="https://weatherapp2-reactjs.netlify.app/"
    target="_blank"
    className="netlify"
  >
    hosted on Netlify
  </a>
);

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by {linkedIn} and is {getHub} and {Netlify}
      </p>
    </div>
  );
}
