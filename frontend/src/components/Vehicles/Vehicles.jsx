import { useEffect, useState } from 'react';
import '../RealEstate/RealEstate.css'
import Search from '../Search/Search';
import axios from 'axios';
import Car from '../Car/Car';

const Vehicles = () => {

  const [cars,setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5054/vehicles/api/get_vehicles/");
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

  

  return (
    <div className="real-container">
      <div className="adv-container">
      <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />

      </div>
      <div className="middle-container">
        <div className="search">
        <Search />
        </div>
        <div className="recommended">recco</div>
        <div className="items">
          {cars.length > 1 ? cars.map((item,index) => (
            <Car key={index} carData={item} />
          ) ) : <Car />}
        </div>
      </div>
      <div className="adv-container">
      <img src="https://directiveconsulting.com/wp-content/uploads/2020/04/image-2-1.png" />

      </div>
    </div>
  );
};

export default Vehicles;
