// import { useEffect } from "react";
import Extra from "./ExtraServices/Extra"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"

const Home = () => {
  // useEffect(() => {
  //   // This code will execute once when the component is mounted
  //   window.location.reload();
  // }, []);
  return (
    <div style={{height:'100vh',backgroundColor:'whitesmoke'}} >
      <Hero />
      <Extra />
      <Footer />
    </div>
  )
}

export default Home