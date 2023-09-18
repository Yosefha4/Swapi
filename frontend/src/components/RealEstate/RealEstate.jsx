/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Apartment from "../Apartment/Apartment";
import "./RealEstate.css";
import axios from "axios";
import Search from "../Search/Search";

const RealEstate = () => {
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [isFiltered,setIsFiltered]= useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/");
        console.log(res.data);
        setApartments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    // Callback function to update filtered apartments
    const updateFilteredApartments = (filtered) => {
      setFilteredApartments(filtered);
    };


    const updateFlag = () => {
      setIsFiltered(!isFiltered);
    };
  

  {
    apartments.length > 1 && console.log(apartments[1]);
  }

  return (
    <div className="real-container">
      <div className="adv-container">
        <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />
      </div>
      <div className="middle-container">
        <div className="search">
        <Search data={apartments} updateFilteredApartments={updateFilteredApartments} updateFlag={updateFlag}  />

        </div>
        <div className="recommended">
          מומלצים
          <Apartment />
        </div>
        <div className="items">
          מודעות חדשות
          {!isFiltered ? (
            apartments.map((item) => <Apartment key={item} data={item} />)
          ) : (
            filteredApartments.map((item) => <Apartment key={item} data={item} />)
          )}
        </div>
      </div>
      <div className="adv-container">
        <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />
      </div>
    </div>
  );
};

export default RealEstate;
