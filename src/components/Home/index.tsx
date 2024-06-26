import React from "react";
import "./Home.scss";
import Top from "../Top";
import Heading from "../Heading";
import Slider from "../Slider";
import CatItem from "../CatItem";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Top />
        <Heading />
        <Slider />
        <CatItem />
      </div>
    </div>
  );
};

export default Home;
