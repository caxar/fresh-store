import React from "react";

import "./Offer.scss";

const Offer = () => {
  const offerData = [
    {
      title: "Публичная оферта",
    },
    {
      title: "Пользовательское соглашение",
    },
    {
      title: "Программа лояльности",
    },
    {
      title: "Политика конфиденциальности",
    },
  ];
  return (
    <div className="offer">
      <div className="offer-wrrapper">
        <ul className="offer-nav">
          {offerData?.map((item) => (
            <li className="offren-nav__item">
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Offer;
