import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { nanoid } from "nanoid";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

import "./ProductCarousel.scss";

const ProductCarousel = ({ images }) => {
  const [thumbs, setThumbs] = React.useState(null);
  return (
    <div className="single-swiper">
      <Swiper
        loop={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        navigation={false}
      >
        {images.map((src) => (
          <SwiperSlide key={nanoid()}>
            <img src={src.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumb gallery */}
      <Swiper
        slidesPerView={3}
        onSwiper={setThumbs}
        className="single-swiper__thumb"
      >
        {images.map((src) => (
          <SwiperSlide key={nanoid()}>
            <img src={src.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={150}
        showArrows={false}
        className="productCarousel"
      >
        {images?.map((item) => (
          <div>
            <img key={nanoid()} src={item?.url} alt={item?.name} />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default ProductCarousel;
