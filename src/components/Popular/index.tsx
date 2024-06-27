import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SlideRasberry from "../../assets/popular-rasberry.png";
import SlideBaker from "../../assets/popular-baker.png";

import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Popular.scss";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-text">
        <div className="popular-text__stick">Популярное</div>
        <div className="popular-text__subtitle">
          Большой каталог местной продукции в одном месте
        </div>
      </div>
      <div className="popular-wrapper">
        <div className="popular-wrapper__left">
          <div className="title">
            Начни <span>заботится о своем</span> здоровье вместе с нами
          </div>
          <div className="popular-buttons"></div>
        </div>
        <div className="popular-wrapper__right">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className=""
          >
            <SwiperSlide>
              <img src={SlideBaker} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SlideBaker} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SlideRasberry} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popular;
