import React from "react";

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

import SlideRasberry from "../../assets/popular-rasberry.png";
import SlideBaker from "../../assets/popular-baker.png";

import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Popular.scss";

const Popular = () => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  const swiperRef = React.useRef();

  return (
    <div className="popular">
      <div className="container">
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
            <div className="popular-buttons">
              {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}

              <div
                className={`popular-buttons__item`}
                onClick={() => swiperRef.current.slidePrev()}
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div
                className="popular-buttons__item"
                onClick={() => swiperRef.current.slideNext()}
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="popular-wrapper__right">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={2}
              spaceBetween={10}
              // navigation={true}
              modules={[Navigation]}
              loop={true}
              className=""
            >
              <SwiperSlide>
                <img src={SlideBaker} alt="" />
                <div className="slide-text">
                  <span>Свежие сезонные ягоды</span>
                  <div className="slide-text__btn">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                        fill="#1c8242"
                      ></path>
                    </svg>
                  </div>
                </div>
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
    </div>
  );
};

export default Popular;
