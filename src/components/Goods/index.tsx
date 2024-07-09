import React from "react";

import { Link } from "react-router-dom";
import { fetchCategory } from "../../redux/category/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/category/selectors";

import "./Goods.scss";
import { nanoid } from "nanoid";
import SkeletonGoods from "./SkeletonGoods";

const Goods = () => {
  const { entities, status } = useSelector(selectCategory);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <div className="goods">
      <div className="container">
        <div className="goods-wrapper">
          {status === "failed"
            ? "Ошибка товаров"
            : status === "pending"
            ? [...new Array(4)].map(() => <SkeletonGoods key={nanoid()} />)
            : entities?.data?.map((item) => (
                <Link key={nanoid()} to={`/category/${item?.attributes?.slug}`}>
                  <div className="goods-card">
                    <img
                      src={
                        import.meta.env.VITE_LOCAL_API +
                        item?.attributes?.image?.data[0]?.attributes?.url
                      }
                      // item.attributes.img.data.attributes.url
                      alt={item?.attributes?.title}
                    />
                    <div className="title">{item?.attributes?.title}</div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Goods;
