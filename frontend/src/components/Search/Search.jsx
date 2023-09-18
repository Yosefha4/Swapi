/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Search.css"


const Search = ({ data, updateFilteredApartments,updateFlag}) => {
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');
  // const [filteredApartments, setFilteredApartments] = useState(data);

  const handleSearch = () => {
    // Filter the apartments based on the search criteria
    console.log("The current data is : " + data[4][4])
    const filtered = data.filter((apartment) => {
      // Check if the city matches the search input
      console.log("this apart : " + apartment )
      const cityMatch = apartment[4].includes(city);

      // // Check if the price matches the search input (you can customize this)
      // const priceMatch = apartment.formatedPrice.includes(price);

      // // Check if the property type matches the search input
      // const typeMatch = apartment.dataArrayAsArray[3].includes(propertyType);

      // Return true if all criteria match, otherwise false
      return cityMatch ;
    });

    // Update filtered apartments in the parent component
    updateFilteredApartments(filtered);
    updateFlag();
  };

  return (
    <div className="mainSearchBar">
      <div className="searchTitle">
        <h3 style={{textAlign:'center',padding:8,backgroundColor:'greenyellow',borderRadius:1}}> ? איזה נכס תרצו לחפש</h3>
      </div>
      <div className="searchContainer">
        
          <div className="byCity">
              <span style={{color:"black",fontSize:14}}>לפי עיר</span>
              <input style={{borderRadius:5,textAlign:'center',color:'GrayText',height:30}} onChange={(e)=> setCity(e.target.value)} placeholder="עיר"/>
          </div>
          <div className="byPrice">
          <span style={{color:"black",fontSize:14}}>לפי מחיר</span>

          <input type="number" style={{borderRadius:5,textAlign:'center',color:'GrayText',height:30}} onChange={(e)=> setPrice(e.target.value)}  placeholder="מחיר"/>

          </div>
          <div className="byType">
          <span style={{color:"black",fontSize:14}}>לפי סוג</span>

          <input style={{borderRadius:5,textAlign:'center',color:'GrayText',height:30}} onChange={(e)=> setPropertyType(e.target.value)}  placeholder="סוג נכס"/>
          </div>
          <div className="searchBtn">
              <button style={{height:30,borderRadius:5,width:150,backgroundColor:'greenyellow',fontWeight:'bold'}} onClick={handleSearch}>חיפוש</button>
          </div>
      </div>

    </div>
  )
}

export default Search