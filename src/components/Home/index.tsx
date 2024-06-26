import React from "react";
import "./Home.scss";
import Top from "../Top";
import Heading from "../Heading";
import Slider from "../Slider";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Top />
        <Heading />
        <Slider />
      </div>
    </div>
  );
};

export default Home;
