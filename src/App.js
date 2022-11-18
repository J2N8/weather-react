import React from "react";
import SearchContainer from "./SearchContainer";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <SearchContainer defaultCity="Tampa" />
      <br />
      <Footer />
      </div>
    </div>
  );
}
