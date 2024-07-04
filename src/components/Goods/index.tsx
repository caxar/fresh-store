import React from "react";

import goodsImage from "../../assets/goods-1.png";

import "./Goods.scss";
import { Link } from "react-router-dom";

const Goods = () => {
  return (
    <div className="goods">
      <div className="container">
        <div className="goods-wrapper">
          <Link to="/">
            <div className="goods-card">
              <img src={goodsImage} alt="" />
              <div className="title">Овощи, фрукты, ягоды</div>
            </div>
          </Link>
          <Link to="/">
            <div className="goods-card">
              <img src={goodsImage} alt="" />
              <div className="title">Хлеб и выпечка</div>
            </div>
          </Link>
          <Link to="/">
            <div className="goods-card">
              <img src={goodsImage} alt="" />
              <div className="title">Сыры</div>
            </div>
          </Link>
          <Link to="/">
            <div className="goods-card">
              <img src={goodsImage} alt="" />
              <div className="title">Сыры</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Goods;
