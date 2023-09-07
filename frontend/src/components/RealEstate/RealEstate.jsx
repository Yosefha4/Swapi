/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Apartment from "../Apartment/Apartment";
import "./RealEstate.css";
import axios from "axios";
import Search from "../Search/Search";

const RealEstate = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5002/");
        console.log(res.data);
        setApartments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          <Search />
        </div>
        <div className="recommended">
          מומלצים
          <Apartment />
        </div>
        <div className="items">
          מודעות חדשות
          {apartments.length > 1 ? (
            apartments.map((item) => <Apartment key={item} data={item} />)
          ) : (
            <Apartment />
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
