/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const NewItemForm = () => {
    const [selectedOption, setSelectedOption] = useState(''); // Initialize the state variable

    const navigation = useNavigate();

    // Function to handle radio input change
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleContinueClick = () => {
        if (selectedOption === 'REALESTATE') {
            navigation('/createApart'); // Navigate to the RealEstateScreen
        } else if (selectedOption === 'VEHICLES') {
            navigation('/createVehicle'); // Navigate to the VehiclesScreen
        }
      };

    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24, gap: 20 }}>
      <h2>Create New Post</h2>
      <h3>Which post do you want to create?</h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, marginTop: 24 }}>
        <div style={{ display: 'flex', border: '1px solid black', padding: 36 ,width:170,height:150,justifyContent:'center',alignItems:'center',gap:4 ,borderRadius:5,backgroundColor:'lightgoldenrodyellow'}}>
          <input
            type="radio"
            id="realestate"
            name="postType"
            value="REALESTATE"
            checked={selectedOption === 'REALESTATE'} // Check if this option is selected
            onChange={handleOptionChange} // Call the function when the input changes
          />
          <label  style={{fontSize:24}}  htmlFor="realestate">נדל"ן</label>
        </div>
        <div style={{ display: 'flex', border: '1px solid black', padding: 36,width:170,height:150,justifyContent:'center',alignItems:'center',gap:4 ,borderRadius:5,backgroundColor:'lightgoldenrodyellow' }}>
          <input
            type="radio"
            id="vehicles"
            name="postType"
            value="VEHICLES"
            checked={selectedOption === 'VEHICLES'} // Check if this option is selected
            onChange={handleOptionChange} // Call the function when the input changes
          />
          <label style={{fontSize:24}} htmlFor="vehicles">רכב</label>
        </div>
      </div>
      <button style={{padding:8}} onClick={handleContinueClick}>המשך</button>
    </div>
  );
}

export default NewItemForm