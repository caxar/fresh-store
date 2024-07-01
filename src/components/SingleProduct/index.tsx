import React from "react";

import { useLocation } from "react-router";

import SingleBg from "../../assets/single-bg.png";

import "./SingleProduct.scss";
import ProductCarousel from "./ProductCarousel";

const SingleProduct = () => {
  const location = useLocation();

  console.log(location.pathname);

  const dataImg = [
    {
      url: SingleBg,
      name: "тестовый",
    },
    {
      url: SingleBg,
      name: "тестовый2",
    },
  ];
  return (
    <div className="single-product">
      <div className="container">
        <div className="single-product__wrapper">
          <div className="single-product__slider">
            <ProductCarousel images={dataImg} />
          </div>
          <div className="single-product__text">
            <div className="title">Персики сладкие</div>
            <div className="rating">
              <div className="rating-star">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#179c49"
                  ></path>
                </svg>
                4.98
              </div>
              <span>500 г</span>
            </div>
            <div className="description">
              <div className="description-first">
                Погрузитесь в летнее волшебство со свежими, сладкими персиками.
                Персик - это вкус солнечного дня и богатсва южных фруктов садов
              </div>
              <div className="description-second">
                <h3>Питательные свойства</h3>
                <span>
                  Эти персики богаты витамином C, витамином A, и калием. Они
                  помогают укрепить иммунитет, улучшить кожу и поддерживать
                  здоровое сердце.
                </span>
              </div>
              <div className="description-third">
                <h3>Способы употребления</h3>
                <span>
                  Идеаьно подходят для свежего употребления, смузи, фрукты,
                  фруктовых салатов и десертов. Они отлично сочетаются с другими
                  фруктами
                </span>
              </div>
            </div>
            <div className="properties">
              <div className="properties-btn">О товаре</div>

              <div className="specifications">
                <h3>Характеристики:</h3>
                <ul className="specifications-nav">
                  <li className="specifications-nav__item">
                    <div className="item-title">Сорт:</div>
                    <div className="item-value">Сладкий и сочный</div>
                  </li>
                  <li className="specifications-nav__item">
                    <div className="item-title">Происхождение:</div>
                    <div className="item-value">
                      ООО Семейные фермы, Краснодарский край
                    </div>
                  </li>
                  <li className="specifications-nav__item">
                    <div className="item-title">Сезон:</div>
                    <div className="item-value">Летний сезон</div>
                  </li>
                  <li className="specifications-nav__item">
                    <div className="item-title">Вес плода:</div>
                    <div className="item-value">150-180 грамм</div>
                  </li>
                </ul>
              </div>
              <div className="nutritional">
                <h3>Пищевая ценность на 100г:</h3>
                <div className="nutritional-wrapper">
                  <ul className="nutritional-wrapper__left">
                    <li className="nutritional-item">
                      <div className="item-title">Калории:</div>
                      <div className="item-value">39 ккал</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Белки:</div>
                      <div className="item-value">0.9 г</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Жиры:</div>
                      <div className="item-value">0.3 г</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Углеводы:</div>
                      <div className="item-value">9.5 г</div>
                    </li>
                  </ul>
                  <ul className="nutritional-wrapper__right">
                    <li className="nutritional-item">
                      <div className="item-title">Пищевая ценность:</div>
                      <div className="item-value">39 ккал</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Витамин C:</div>
                      <div className="item-value">0.9 г</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Витамин А:</div>
                      <div className="item-value">0.3 г</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Калий:</div>
                      <div className="item-value">9.5 г</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="recommendations">
                <h3>Советы по хранению</h3>
                <span>
                  Хранить при комнатной температуре, чтобы сохранить свежесть и
                  аромат
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
