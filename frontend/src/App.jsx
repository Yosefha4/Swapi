/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";

import "./App.css";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RealEstate from "./components/RealEstate/RealEstate";
import Vehicles from "./components/Vehicles/Vehicles";
import NewApart from "./components/CreateNewItem/NewApart";
import NewItemForm from "./components/CreateNewItem/NewItemForm";
import NewVehicle from "./components/CreateNewItem/NewVehicle";

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
        <Route path="/auth" element={<Auth/>} />
        <Route path="/createApart" element={<NewApart/>} />
        <Route path="/createVehicle" element={<NewVehicle/>} />
        <Route path="/newItem" element={<NewItemForm/>} />
      </Routes>
  
      {/* <Footer /> */}
       {/* <Footer /> */}
      {/* <Auth/> */}
    </div>
  );
}

export default App;
