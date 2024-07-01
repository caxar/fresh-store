import React from "react";
import "./SingleProduct.scss";
import { useLocation } from "react-router";

const SingleProduct = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div className="single-product">
      <div className="container">
        <div className="single-product__wrapper">
          <div className="single-product__slider"></div>
          <div className="single-product__text">
            <div className="title">Персики сладкие</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
