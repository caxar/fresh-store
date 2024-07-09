import React from "react";

import "./Offer.scss";
import { nanoid } from "nanoid";

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
      <div className="container">
        <div className="offer-wrrapper">
          <ul className="offer-nav">
            {offerData?.map((item) => (
              <li key={nanoid()} className="offren-nav__item">
                <a href="">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;
