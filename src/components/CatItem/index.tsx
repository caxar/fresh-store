import React from "react";
import Button from "../Button";

import CatApple from "../../assets/cat-apple.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CatItem.scss";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCategory from "./ProductCategory";

const CatItem = () => {
  return (
    <div className="cat-item">
      <div className="container">
        <div className="cat-item__text">
          <div className="title">Фрукты и овощи</div>
          <div className="subtitle">
            Мы предлагаем натуральные и органические продукты
          </div>
          <Button> Перейти в раздел</Button>
        </div>
        <div className="cat-item__sliders">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={30}
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                // spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                // spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                // spaceBetween: 40,
              },
              1028: {
                slidesPerView: 3,
                // spaceBetween: 30,
              },
              1250: {
                slidesPerView: 4,
                // spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>{/* <ProductCategory />~ */}</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CatItem;
