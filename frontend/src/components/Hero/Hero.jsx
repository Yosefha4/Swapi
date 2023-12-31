import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="main-container">
      <div className="adv-section">
        <div className="contextadv">
          <h1 style={{fontFamily:'Tahoma, Geneva, Verdana, sans-serif',color:'whitesmoke'}}>? רוצים לפרסם מודעה  </h1>
          <h2 style={{fontFamily:'Tahoma, Geneva, Verdana, sans-serif',textShadow:'2px 2px 10px red',marginTop:18,color:'whitesmoke'}}>! מבצע מיוחד ל-50 הנרשמים לאתר : חבילת פרסום פרימיום לשלושה חודשים חינם</h2>
          <button className="adv-button">הרשמה</button>
        </div>
      </div>
      <div className="hero-section">
        {/* <div className="hero-item">Real Estate</div> */}
        <div className="hero-item">
          <div className="hero-content">
            <img
              src="https://img.freepik.com/premium-photo/male-hands-protect-red-toy-car_220873-6146.jpg?w=1060"
              className="hero-image"
            />
            <Link to="/vehicles">
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
            <Link to="/realEstate">
              <button className="hero-button-1">נדל"ן</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
