import React from "react";

import footerBg from "../../assets/footer-bg.png";

import "./Footer.scss";
import Button from "../Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper__left">
          <div className="connect">
            <div className="logo">FRESH</div>
            <Button>Написать нам</Button>
          </div>
          <div className="navigation">
            <ul>
              <li className="navigation-item">
                <a href="">О бренде</a>
              </li>
              <li className="navigation-item">
                <a href="">Контакты</a>
              </li>
              <li className="navigation-item">
                <a href="">Гарантия</a>
              </li>
              <li className="navigation-item">
                <a href="">Сотрудничество</a>
              </li>
            </ul>
            <ul>
              <li className="navigation-item">
                <a href="">FAQ</a>
              </li>
              <li className="navigation-item">
                <a href="">Акции</a>
              </li>
              <li className="navigation-item">
                <a href="">Рецепты</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-wrapper__right">
          <img src={footerBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
