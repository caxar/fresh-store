import React from "react";
import "./Home.scss";

import Slider from "../Slider";
import CatItem from "../CatItem";
import Popular from "../Popular";
import Values from "../Values";
import Cooperation from "../Cooperation";

import ScrollBtn from "../ScrollBtn";
import BottomNavigation from "../BottomNavigation";

const Home = () => {
  const [scrollingBtn, setScrollingBtn] = React.useState<boolean>(false);

  const handleScrollingBtn = () => {
    const offsetTop = window.scrollY;
    if (offsetTop > 400) {
      setScrollingBtn(true);
    } else {
      setScrollingBtn(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollingBtn);
  }, []);

  return (
    <div className="home">
      {/* <Top />
      <Heading /> */}
      <Slider />
      <CatItem />
      <Popular />
      <Values />
      <CatItem />
      <Cooperation />
      <CatItem />
      <ScrollBtn scrollingBtn={scrollingBtn} />
      <BottomNavigation />
      {/* <Footer />
      <Offer /> */}
    </div>
  );
};

export default Home;
