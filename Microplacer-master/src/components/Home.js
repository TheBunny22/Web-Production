import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import InstantQuote from "./blocks/InstantQuote";
import slide1 from "../img/1.png";
import slide2 from "../img/2.jpg";
import slide3 from "../img/3.jpg";
import slide4 from "../img/4.jpg";
import Cards from "./blocks/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import DiscriptionHome from "./blocks/DiscriptionHome";
import Newsdisplay from "./blocks/Newsdisplay";
import Videoplayer from "./blocks/Videoplayer";
import Allies from "./blocks/Allies";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <CCarousel
          controls
          indicators
          style={{
            overflow: "hidden",
          }}
        >
          <CCarouselItem>
            <CImage className="d-block w-100 " src={slide1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 " src={slide2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 " src={slide3} alt="slide 3" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 " src={slide4} alt="slide 4" />
          </CCarouselItem>
        </CCarousel>
      </div>
      <div>
        <InstantQuote />
        <Newsdisplay />
        <Cards />
        <Videoplayer />
        <DiscriptionHome />
       <Allies allinum={"200,000"}/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
