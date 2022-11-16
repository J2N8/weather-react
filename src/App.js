import SearchContainer from "./components/SearchContainer";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <SearchContainer />
      <WeatherContainer
        city="Tampa"
        temperature={73}
        humidity={48}
        wind={6}
        time="1:41 PM"
        description="Cloudy"
      />
      <br />
      <Footer />
    </div>
  );
}
