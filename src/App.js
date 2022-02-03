import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import GameCard from "./Components/GameCard/GameCard";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <div style={{ height: "667px" }}></div> */}
      <Routes>
          <Route path="/" element={<HomePage />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
