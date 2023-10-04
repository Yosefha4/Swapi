import { useEffect, useState } from 'react';
import '../RealEstate/RealEstate.css'
import Search from '../Search/Search';
import axios from 'axios';
import Car from '../Car/Car';
import Footer from '../Footer/Footer';
import Apartment from '../Apartment/Apartment';

const Vehicles = () => {

  const [cars,setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isFiltered,setIsFiltered]= useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://cars-ms.onrender.com/vehicles/api/get_vehicles/");
        console.log(res.data);
        setCars(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  {
    cars.length > 1 && console.log(cars);
  }

      // Callback function to update filtered cars
      const updateFilteredCars = (filtered) => {
        setFilteredCars(filtered);
      };
  
  
      const updateFlag = () => {
        setIsFiltered(!isFiltered);
      };
  

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className="real-container">
      <div className="adv-container">
      <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />

      </div>
      <div className="middle-container">
        <div className="search">
        {/* <Search /> */}
        <Search data={cars} updateFilteredApartments={updateFilteredCars} updateFlag={updateFlag}  />

        </div>
        <div className="recommended">
        <Apartment />
        </div>
        <div className="items">
          {cars.length > 1 ? cars.map((item,index) => (
            <Car key={index} carsDataArr={item} />
          ) ) : <Car />}
        </div>
      </div>
      <div className="adv-container">
      <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />

      </div>
    </div>
    <Footer />

    </div>
  );
};

export default Vehicles;
