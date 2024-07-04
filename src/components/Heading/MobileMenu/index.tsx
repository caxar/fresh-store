import React from "react";

import "./MobileMenu.scss";

interface PropsMenu {
  showMobileMenu: boolean;
  setShowMobileMenu: (i: boolean) => void;
}

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }: PropsMenu) => {
  // Зкрыть меню при клике вне элемента
  const handleClickOut = (e) => {
    if (e.target.classList.contains("mobile-bg")) {
      setShowMobileMenu(false);
    }
  };
  return (
    <div className="mobile-menu" onClick={(e) => handleClickOut(e)}>
      <div className="mobile-bg"></div>
      <div className={`mobile-content ${showMobileMenu ? "showMenu" : ""}`}>
        <div className="mobile-close">X</div>
        <div className="mobile-main"></div>
      </div>
    </div>
  );
};

export default MobileMenu;
function setShowMobileMenu(arg0: boolean) {
  throw new Error("Function not implemented.");
}
