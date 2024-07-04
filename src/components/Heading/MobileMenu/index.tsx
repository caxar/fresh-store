import React from "react";

import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import AdvCatalogImage from "../../../assets/adv-catalog.svg";

import "./MobileMenu.scss";

interface PropsMenu {
  showMobileMenu: boolean;
  setShowMobileMenu: (i: boolean) => void;
}

const dataMenu = [
  {
    title: "О бренде",
    link: "/about",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Гарантия",
    link: "/garanty",
  },
  {
    title: "Сотрудничество",
    link: "/communication",
  },
  {
    title: "Акции",
    link: "/acii",
  },
];

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }: PropsMenu) => {
  // Зкрыть меню при клике вне элемента
  const handleClickOut = (e) => {
    if (e.target.classList.contains("mobile-bg")) {
      setShowMobileMenu(false);
    }
  };

  const handleClickClose = () => {
    setShowMobileMenu(false);
  };
  return (
    <div className="mobile-menu" onClick={(e) => handleClickOut(e)}>
      <div className="mobile-bg"></div>
      <div className={`mobile-content ${showMobileMenu ? "showMenu" : ""}`}>
        <div className="mobile-content__top">
          <div className="logo">FRESH</div>
          <div onClick={() => handleClickClose()} className="mobile-close">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Close_MD">
                <path
                  id="Vector"
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="mobile-main">
          <ul className="mobile-nav">
            <li>
              <Link to="/goods" className="mobile-nav__adv">
                <span>Каталог товаров</span>
                <img src={AdvCatalogImage} alt="" />
              </Link>
            </li>
            {dataMenu.map((item) => (
              <li key={nanoid()} className="mobile-nav__item">
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
function setShowMobileMenu(arg0: boolean) {
  throw new Error("Function not implemented.");
}
