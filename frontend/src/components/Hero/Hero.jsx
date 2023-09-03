import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="adv-section">advz</div>
      <div className="hero-section">
        {/* <div className="hero-item">Real Estate</div> */}
        <div className="hero-item">
          <div className="hero-content">
            <img
              src="https://img.freepik.com/premium-photo/male-hands-protect-red-toy-car_220873-6146.jpg?w=1060"
              className="hero-image"
            />
            <Link to="vehicles">
              <button className="hero-button-2">רכב</button>
            </Link>
          </div>
        </div>
        <div className="hero-item">
          <div className="hero-content">
            <img
              src="https://img.freepik.com/free-photo/house-key-home-insurance-broker-agent-s-hand-protection_1150-14910.jpg?w=1060&t=st=1693736813~exp=1693737413~hmac=6f486bd1d69899066d817d972d4557989ed2b3108413a13e662a016cfc094755"
              className="hero-image"
            />
            <Link to="realEstate">
              <button className="hero-button-1">נדל"ן</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
