/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";

import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RealEstate from "./components/RealEstate";
import Vehicles from "./components/Vehicles";

function App() {
  const [count, setCount] = useState(0);
  console.log(count, setCount);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/realEstate" element={<RealEstate />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/contact" element={<Auth/>} />
      </Routes>
      {/* <Auth/> */}
    </div>
  );
}

export default App;
