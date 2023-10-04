/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Search.css";

const Search = ({ data, updateFilteredApartments, updateFlag }) => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const [passData, setPassData] = useState({});
  const [filterData, setFilterData] = useState({});

  // const [filteredApartments, setFilteredApartments] = useState(data);

  // data.map((item) => {
  //   console.log(item);
  // });

  const handleSearch = () => {
    // Filter the apartments based on the search criteria
    console.log("The current data is : " + data);

    const filteredItems = data.filter((item) => {
      return item.apCity.includes(city);
    });

    // Set the filtered items in state
    setFilterData(filteredItems);

    updateFilteredApartments(filteredItems);
    updateFlag();
  };

  // Add an event listener to detect changes in the city input
  // and reset the filter when it becomes empty
  const handleCityInputChange = (e) => {
    const newCityValue = e.target.value;
    setCity(newCityValue);

    if (newCityValue === "") {
      setFilterData(data); // Reset the filter to show all items
    }
  };

  // const handleSearch = () => {
  //   const numericPriceInput = parseFloat(price);

  //   // Filter the apartments based on the search criteria
  //   const filteredItems = data.filter((item) => {
  //     // Check if the city matches
  //     const cityMatch =
  //       city === "" || item.apCity.includes(city);

  //     // Convert the apartment's price to a number
  //     const numericApPrice = parseFloat(item.price);

  //     // Check if the numeric apartment price is greater than or equal to the user's input
  //     const priceMatch =
  //      0 || numericApPrice >= numericPriceInput;

  //     // Check if the property type matches
  //     const propertyTypeMatch =
  //       propertyType === "" || item.apType.includes(propertyType);

  //     // Return true if all criteria match
  //     return cityMatch && priceMatch && propertyTypeMatch;
  //   });

  //   // Set the filtered items in state
  //   setFilterData(filteredItems);

  //   // Update filtered apartments in the parent component
  //   updateFilteredApartments(filteredItems);
  //   updateFlag();
  // };

  return (
    <div className="mainSearchBar">
      <div className="searchTitle">
        <h3
          style={{
            textAlign: "center",
            padding: 8,
            backgroundColor: "greenyellow",
            borderRadius: 1,
          }}
        >
          {" "}
          ? איזה נכס תרצו לחפש
        </h3>
      </div>
      <div className="searchContainer">
        <div className="byCity">
          <span style={{ color: "black", fontSize: 14 }}>לפי עיר</span>
          <input
            style={{
              borderRadius: 5,
              textAlign: "center",
              color: "GrayText",
              height: 30,
            }}
            onChange={handleCityInputChange}
            // onChange={(e) => setCity(e.target.value)}
            placeholder="עיר"
          />
        </div>
        <div className="byPrice">
          <span style={{ color: "black", fontSize: 14 }}>לפי מחיר</span>

          <input
            type="number"
            style={{
              borderRadius: 5,
              textAlign: "center",
              color: "GrayText",
              height: 30,
            }}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="מחיר"
          />
        </div>
        <div className="byType">
          <span style={{ color: "black", fontSize: 14 }}>לפי סוג</span>

          <input
            style={{
              borderRadius: 5,
              textAlign: "center",
              color: "GrayText",
              height: 30,
            }}
            onChange={(e) => setPropertyType(e.target.value)}
            placeholder="סוג נכס"
          />
        </div>
        <div className="searchBtn">
          <button
            style={{
              height: 30,
              borderRadius: 5,
              width: 150,
              backgroundColor: "greenyellow",
              fontWeight: "bold",
            }}
            onClick={handleSearch}
          >
            חיפוש
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
