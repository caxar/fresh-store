import React, { useDebugValue } from "react";

import { useLocation, useParams } from "react-router";

import SingleBg from "../../assets/single-bg.png";

import "./SingleProduct.scss";
import ProductCarousel from "./ProductCarousel";
import CatItem from "../CatItem";
import RecipeItem from "../RecipeItem";
import { fetchDataFromApi } from "../../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/singleProduct/asyncActions";
import { selectSingleProduct } from "../../redux/singleProduct/selectors";
import { nanoid } from "nanoid";
import { addFavorite } from "../../redux/favorite/favoriteSlice";
import { FavItem } from "../../redux/favorite/types";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadCrumbs from "../BreadCrumbs";

const SingleProduct = () => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  // получаем location для breadcrumbs
  const location = useLocation();
  console.log(location.pathname);

  // Получаем slug товара для запроса з=данных
  const { slug } = useParams();

  // Меняем slug при изменении старницы товара для загрузки данных
  React.useEffect(() => {
    dispatch(fetchSingleProduct(slug));
  }, [slug]);

  // поулчаем данные из redux
  const { entities, status } = useSelector(selectSingleProduct);

  // что бы не было ошибки 0 элементов проверяем есть ли что-то в items если нет возвращаем пустое значание
  if (!entities) return <></>;

  const singleData = entities?.data?.[0]?.attributes;

  // Добавить товар в избранное
  const addToFavorite = () => {
    // ограничения на добавления с помощью типизации FavItem из FavoriteSlice
    const item: FavItem = {
      attributes: {
        id: singleData.slug,
        title: singleData.title,
        imageUrl:
          import.meta.env.VITE_LOCAL_API +
          singleData?.image?.data[0]?.attributes?.url,
        price: singleData.price,
        weight: singleData.weight,
        slug: singleData.slug,
      },
    };
    dispatch(addFavorite(item));
    notify();
  };

  const notify = () =>
    toast.success("Добавленно в избранное", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <div className="single-product">
      <BreadCrumbs />
      <div className="container">
        <div className="single-product__wrapper">
          <div className="single-product__slider">
            <ProductCarousel images={singleData?.image?.data} />
            <div
              onClick={() => addToFavorite()}
              className="single-product__fav"
            >
              <svg
                width="23px"
                height="23px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                  fill="#179c49"
                />
              </svg>
            </div>
          </div>
          <div className="single-product__text">
            <div className="title">{singleData?.title}</div>
            <div className="rating">
              <div className="rating-star">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#179c49"
                  ></path>
                </svg>
                4.98
              </div>
              <span>{singleData?.weight} г</span>
            </div>
            <div className="product-links">
              <span className="product-links__price">
                {singleData?.price} ₽
              </span>
              <div className="product-links__btn">В корзину</div>
            </div>
            <div className="description">
              <div className="description-first">{singleData?.description}</div>
              <div className="description-second">
                <h3>Питательные свойства</h3>
                <span>
                  Эти персики богаты витамином C, витамином A, и калием. Они
                  помогают укрепить иммунитет, улучшить кожу и поддерживать
                  здоровое сердце.
                </span>
              </div>
              <div className="description-third">
                <h3>Способы употребления</h3>
                <span>
                  Идеаьно подходят для свежего употребления, смузи, фрукты,
                  фруктовых салатов и десертов. Они отлично сочетаются с другими
                  фруктами
                </span>
              </div>
            </div>
            <div className="properties">
              <div className="properties-btn">О товаре</div>
              {!singleData?.specifications ? (
                ""
              ) : (
                <div className="specifications">
                  <h3>Характеристики:</h3>
                  <ul className="specifications-nav">
                    <li className="specifications-nav__item">
                      <div className="item-title">Сорт:</div>
                      <div className="item-value">Сладкий и сочный</div>
                    </li>
                    <li className="specifications-nav__item">
                      <div className="item-title">Происхождение:</div>
                      <div className="item-value">
                        ООО Семейные фермы, Краснодарский край
                      </div>
                    </li>
                    <li className="specifications-nav__item">
                      <div className="item-title">Сезон:</div>
                      <div className="item-value">Летний сезон</div>
                    </li>
                    <li className="specifications-nav__item">
                      <div className="item-title">Вес плода:</div>
                      <div className="item-value">150-180 грамм</div>
                    </li>
                  </ul>
                </div>
              )}
              <div className="nutritional">
                <h3>Пищевая ценность на 100г:</h3>
                <div className="nutritional-wrapper">
                  <ul className="nutritional-wrapper__left">
                    {singleData?.nutritional?.map((item) => (
                      <li key={nanoid()} className="nutritional-item">
                        <div className="item-title">{item?.title}:</div>
                        <div className="item-value">
                          {item?.value} {item?.sign}
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* <ul className="nutritional-wrapper__right">
                    <li className="nutritional-item">
                      <div className="item-title">Пищевая ценность:</div>
                      <div className="item-value">39 ккал</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Витамин C:</div>
                      <div className="item-value">0.9 г</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Витамин А:</div>
                      <div className="item-value">0.3 г</div>
                    </li>
                    <li className="nutritional-item">
                      <div className="item-title">Калий:</div>
                      <div className="item-value">9.5 г</div>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="recommendations">
                <h3>Советы по хранению</h3>
                <span>
                  Хранить при комнатной температуре, чтобы сохранить свежесть и
                  аромат
                </span>
              </div>
            </div>
          </div>
        </div>

        <CatItem />

        <RecipeItem />
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleProduct;
