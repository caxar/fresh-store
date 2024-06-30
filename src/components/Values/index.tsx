import React from "react";

import Button from "../Button";

import groceryOnline from "../../assets/online-groceries.png";

import "./Values.scss";

const Values = () => {
  return (
    <div className="values">
      <div className="values-wrapper">
        <div className="values-wrapper__left">
          <div className="values-ticket">Ценности</div>
          <div className="text">
            <div className="title">
              Мы работаем с продуктами, которые имеют
              <span>соответсвующие сертификаты</span> и проходят{" "}
              <span>контроль на каждом этапе</span>
            </div>
            <div className="subtitle">
              У нас вы найдете всё, что нужно для здорового и вкусного питания,
              начиная с свежих фруктов и овощей и заканчивая молочными
              продуктамии готовой едой
            </div>
          </div>
          <Button>Подробнее</Button>
        </div>
        <div className="values-wrapper__right">
          <img src={groceryOnline} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Values;
