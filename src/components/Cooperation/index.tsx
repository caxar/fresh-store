import React from "react";

import cooperationLeft from "../../assets/cooperation-left.png";
import cooperationRight from "../../assets/cooperation-right.png";

import "./Cooperation.scss";
import { nanoid } from "nanoid";

const Cooperation = () => {
  const cloudWord = [
    {
      title: "Полезная еда",
      bg: "#e1b89d",
    },
    {
      title: "ЯдринМолоко",
      bg: "#3abd97",
    },
    {
      title: "Свежесть каждый день",
      bg: "#59a9fd",
    },
    {
      title: "ОдинДень",
      bg: "#fbb555",
    },
    {
      title: "ОвощнойТорг",
      bg: "#bab2fd",
    },
  ];

  return (
    <div className="cooperation">
      <div className="container">
        <div className="cooperation-wrapper">
          <div className="title">
            <span>FRESH</span> - объединяет <span>местных производителей,</span>{" "}
            у которых есть страсть к свежим и{" "}
            <span>качественным продуктам</span> с миссией{" "}
            <span>заботы о мире</span> и вашем здоровье
          </div>
          <div className="year">
            2018 - <span>2024</span>
          </div>
          <ul className="food-nav">
            {cloudWord?.map((item) => (
              <li
                key={nanoid()}
                className="food-nav__item"
                style={{ background: item.bg }}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <img className="cooperation-left" src={cooperationLeft} alt="" />
          <img className="cooperation-right" src={cooperationRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
