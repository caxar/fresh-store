import React from "react";

const getFavoriteDataLs = () => {
  // если в localStorage существует по ключу cartItem тогда
  // происходи Parse в Обьект
  const data = localStorage.getItem("favItem");
  return data ? JSON.parse(localStorage.getItem("favItem")) : [];
};

export default getFavoriteDataLs;
