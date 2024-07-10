import React from "react";

import "./Fav.scss";
import { addFavorite } from "../../redux/favorite/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/selectors";
import ProductCategory from "../CatItem/ProductCategory";
import { nanoid } from "nanoid";

const Fav = () => {
  // данные из redux
  const { items } = useSelector(selectFavorite);

  console.log(items);
  return (
    <div className="fav">
      <div className="container">
        <div className="fav-wrapper">
          {items.length === 0 && (
            <div className="fav-text">
              <div className="title">Избранное</div>
              <div className="subtitle">
                В этом разделе отображаются товары, которые вам понравились
              </div>
            </div>
          )}

          {items.length > 0 && (
            <div className="fav-content">
              {items.map((dataItem) => (
                <ProductCategory key={nanoid()} {...dataItem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;
