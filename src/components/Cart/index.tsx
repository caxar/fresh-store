import React from "react";
import "./Cart.scss";
import Button from "../Button";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-wrapper">
        <div className="cart-wrapper__img"></div>
        <div className="cart-wrapper__text">Корзина ждёт, пока её наполнят</div>
        <Button>За покупками</Button>
      </div>
    </div>
  );
};

export default Cart;
