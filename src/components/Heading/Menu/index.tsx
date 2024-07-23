import React from "react";
import "./Menu.scss";
import { fetchDataFromApi } from "../../../utils/Api";
import { CategoryItem } from "../../../redux/category/types";
import { nanoid } from "nanoid";

interface PropsMenu {
  showMenu: boolean;
  items: CategoryItem;
}

const Menu = ({ showMenu, items }: PropsMenu) => {
  const [activeMenu, setActiveMenu] = React.useState<number>(1);

  const handleMenuEnter = (index: number) => {
    setActiveMenu(index);
  };

  console.log("tat", items);

  return (
    <div className={`heading-menu ${showMenu ? "active-show" : ""}`}>
      <div className="container">
        <div className="heading-menu__categories">
          {items?.data?.map((category) => (
            <div
              key={nanoid()}
              className="menu__1"
              onMouseEnter={() => handleMenuEnter(category.id)}
            >
              <div
                className={`menu__1-title ${
                  activeMenu === category.id ? "active" : ""
                }`}
              >
                {category?.attributes?.title}
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#179c49"
                  />
                </svg>
              </div>
              <div
                className={`menu__1-content ${
                  activeMenu === category?.id ? "is-active" : ""
                }`}
              >
                <div className="menu__1-wrapper">
                  <div className="menu__2">
                    {/* <a href="" className="menu__2-title">
                      Овощи, грибы{" "}
                    </a> */}
                    <div className="menu__2-content">
                      {category?.attributes?.products?.data?.map(
                        (menu_item) => (
                          <a
                            href={`/goods/${menu_item?.attributes?.slug}`}
                            className="menu__3"
                          >
                            {menu_item?.attributes?.title}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="menu__1" onMouseEnter={() => handleMenuEnter(0)}>
            <div
              className={`menu__1-title ${activeMenu === 0 ? "active" : ""}`}
            >
              Фрукты и овощи
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="#179c49"
                />
              </svg>
            </div>
            <div
              className={`menu__1-content ${
                activeMenu === 0 ? "is-active" : ""
              }`}
            >
              <div className="menu__1-wrapper">
                <div className="menu__2">
                  <a href="" className="menu__2-title">
                    Овощи, грибы{" "}
                  </a>
                  <div className="menu__2-content">
                    <a href="" className="menu__3">
                      Помидоры
                    </a>
                    <a href="" className="menu__3">
                      Огурцы
                    </a>
                    <a href="" className="menu__3">
                      Картофель
                    </a>
                    <a href="" className="menu__3">
                      Свекла
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="menu__1" onMouseEnter={() => handleMenuEnter(1)}>
            <div
              className={`menu__1-title ${activeMenu === 1 ? "active" : ""}`}
            >
              Рыба и мясо
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="#179c49"
                />
              </svg>
            </div>
            <div
              className={`menu__1-content ${
                activeMenu === 1 ? "is-active" : ""
              }`}
            >
              <div className="menu__1-wrapper">
                <div className="menu__2">
                  <a href="" className="menu__2-title">
                    Свежя рыба{" "}
                  </a>
                  <div className="menu__2-content">
                    <a href="" className="menu__3">
                      Замороженеая
                    </a>
                    <a href="" className="menu__3">
                      Криль
                    </a>
                    <a href="" className="menu__3"></a>
                    <a href="" className="menu__3">
                      Свекла
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
