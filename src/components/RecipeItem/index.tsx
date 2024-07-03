import React from "react";

import { Link } from "react-router-dom";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";

import RecipeImage from "../../assets/recipe-bg.png";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./RecipeItem.scss";

const RecipeItem = () => {
  return (
    <div className="recipe">
      <div className="container">
        <div className="recipe-wrapper">
          <div className="recipe-text">
            <div className="title">Рецепты с этим товаром</div>
            <Button link="/recipe">Перейти в раздел</Button>
          </div>
          <div className="recipe-slider">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={30}
              grabCursor={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="recipe-slider__item">
                  <div className="slider-item__top">
                    <Link to="/">
                      <img src={RecipeImage} alt="" />
                    </Link>
                  </div>
                  <div className="slider-item__bottom">
                    <div className="title">Салат с жаренными персиками</div>
                    <Link to="/" className="link">
                      Подробнее
                      <span>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                            fill="#179c49"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recipe-slider__item">
                  <div className="slider-item__top">
                    <Link to="/">
                      <img src={RecipeImage} alt="" />
                    </Link>
                  </div>
                  <div className="slider-item__bottom">
                    <div className="title">Салат с жаренными персиками</div>
                    <Link to="/" className="link">
                      Подробнее
                      <span>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                            fill="#179c49"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recipe-slider__item">
                  <div className="slider-item__top">
                    <Link to="/">
                      <img src={RecipeImage} alt="" />
                    </Link>
                  </div>
                  <div className="slider-item__bottom">
                    <div className="title">Салат с жаренными персиками</div>
                    <Link to="/" className="link">
                      Подробнее
                      <span>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                            fill="#179c49"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
