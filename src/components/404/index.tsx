import React from "react";

import ErrorImage from "../../assets/404.png";

import "./ErrorSite.scss";
import Button from "../Button";

const ErrorSite = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error-wrapper">
          <span className="title">
            Мы надеялись, что вы никогда не прочитаете это сообщение, но что-то
            пошло не так...
          </span>
          <img src={ErrorImage} alt="" />
          <div className="subtitle">
            Возможно такой странице не существует.Вы можете воспользоваться
            каталогом
          </div>
          <Button link="/goods">Каталог</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorSite;
