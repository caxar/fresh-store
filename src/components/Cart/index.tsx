import React from "react";
import Button from "../Button";

import emptyCart from "../../assets/cart.png";

import "./Cart.scss";

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart-wrapper">
          <div className="cart-wrapper__img">
            <img src={emptyCart} alt="" />
          </div>
          <div className="cart-info">
            <div className="cart-wrapper__text">
              Корзина ждёт, пока её наполнят
            </div>
            <Button link="catalog">За покупками</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
