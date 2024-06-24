import React from "react";
import "./Home.scss";
import Top from "../Top";
import Heading from "../Heading";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Top />
        <Heading />
      </div>
    </div>
  );
};

export default Home;
