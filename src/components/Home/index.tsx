import React from "react";
import "./Home.scss";
import Top from "../Top";
import Heading from "../Heading";
import Slider from "../Slider";
import CatItem from "../CatItem";
import Popular from "../Popular";
import Values from "../Values";
import Cooperation from "../Cooperation";
import Footer from "../Footer";
import Offer from "../Footer/Offer";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Top />
        <Heading />
        <Slider />
        <CatItem />
        <Popular />
        <Values />
        <CatItem />
        <Cooperation />
        <CatItem />
        <Footer />
        <Offer />
      </div>
    </div>
  );
};

export default Home;
