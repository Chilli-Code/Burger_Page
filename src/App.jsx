import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Textimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration:800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return(
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Textimonial />
      <Footer />
    </div>
  );
};

export default App