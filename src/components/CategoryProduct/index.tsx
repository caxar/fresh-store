import React from "react";

import { fetchDataFromApi } from "../../utils/Api";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../../redux/categoryProducts/asyncAction";
import { selectCategoryProducts } from "../../redux/categoryProducts/selectors";
import CatItem from "../CatItem";
import { nanoid } from "nanoid";
import ProductCategory from "../CatItem/ProductCategory";

import "./CategoryProduct.scss";

const CategoryProduct = () => {
  const dispatch = useDispatch();

  // Получаем slug из url категории
  const { slug } = useParams();

  //    при изменении slug делаем запрос на получения данных
  React.useEffect(() => {
    dispatch(fetchCategoryProducts(slug));
  }, [slug]);

  //   данные из redux status объекта и сами данные
  const { entities, status } = useSelector(selectCategoryProducts);

  return (
    <div className="category-product">
      <div className="container">
        <div className="category-product__wrapper">
          {entities?.data?.map((item) => (
            <ProductCategory key={nanoid()} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
