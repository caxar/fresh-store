import React from "react";

import "./CategoryProduct.scss";
import { fetchDataFromApi } from "../../utils/Api";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../redux/categoryProducts/asyncAction";

const CategoryProduct = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategoryProducts(slug));
  }, [slug]);

  //   const res = fetchDataFromApi(
  //     `/api/products?filters[categories][slug]=${slug}&populate=*`
  //   );

  //   console.log(res);

  return (
    <div className="category-product">
      <div className="container">
        <div className="category-product__wrapper"></div>
      </div>
    </div>
  );
};

export default CategoryProduct;
