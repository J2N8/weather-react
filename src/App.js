import SearchContainer from "./components/SearchContainer";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <SearchContainer defaultCity="Tampa" />
      <br />
      <Footer />
    </div>
  );
}
