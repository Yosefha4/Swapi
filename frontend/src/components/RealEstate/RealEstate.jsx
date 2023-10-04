/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Apartment from "../Apartment/Apartment";
import "./RealEstate.css";
import axios from "axios";
import Search from "../Search/Search";
import try1 from "../../assets/epAdv.png";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase";

const RealEstate = () => {
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const [imagesList, setImagesList] = useState([]);

  const imagesRefUrl = ref(storage, "images/");

  useEffect(() => {
    listAll(imagesRefUrl).then((response) => {
      response.items.forEach((item) => {
        // console.log("item name : " + item.name);
        // console.log("item : : : ;" + item);
        setImagesList((prev) => [...prev, item.name]);
        getDownloadURL(item).then((url) => {
          // console.log(url);
        });
      });
      // console.log(response)
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://apartmen-ms.onrender.com/aparts/api/get_all_apartments"
        );
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



  // Define a function to get the download URL for an image based on its name
  const getImageDownloadURL = async (imageName) => {
    try {
      const url = await getDownloadURL(ref(storage, `images/${imageName}`));
      return url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  };
  let currentImgUrl= "";

  return (
    <div className="real-container">
      <div className="adv-container">
        <img src={try1} />
        {/* <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" /> */}
      </div>
      <div className="middle-container">
        <div className="search">
          <Search
            data={apartments}
            updateFilteredApartments={updateFilteredApartments}
            updateFlag={updateFlag}
          />
        </div>
        <div className="recommended">
          מומלצים
          <Apartment />
        </div>
        <div className="items">
          מודעות חדשות
          {!isFiltered
          
            ? apartments.map((item, index) => {
                // console.log("first:" + item.apImages);
                // Get the image URL for the apartment
                
                const imageUrl =  getImageDownloadURL(item.apImages).then(
                  (url) => {
                    currentImgUrl = url;
                    // console.log(url);
                  }
                )
                // console.log("imageUrl: " + imageUrl)
                return <Apartment key={index} dataArray={item} />;
              })
            : filteredApartments.map((item) => (
                <Apartment key={item} dataArray={item} />
              ))}
        </div>
      </div>
      <div className="adv-container">
        <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />
      </div>
    </div>
  );
};

export default RealEstate;
