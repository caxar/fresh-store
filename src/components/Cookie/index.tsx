import React from "react";

import "./Cookie.scss";

const Cookie = () => {
  const [clickedBtn, setClickedBtn] = React.useState<boolean>();
  const handleClickBtn = () => {
    localStorage.setItem("cookie", "true");
    setClickedBtn(true);
  };

  return (
    <div className="cookie" style={{ left: clickedBtn ? "100%" : "" }}>
      <div className="cookie-alert">
        <div className="cookie-alert__text">Мы исользуем файлы cookie </div>
        <div onClick={() => handleClickBtn()} className="cookie-alert__btn">
          Хорошо
        </div>
      </div>
    </div>
  );
};

export default Cookie;
