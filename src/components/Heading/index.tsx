import React from "react";
import "./Heading.scss";
import Search from "../Search";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/selectors";
import { fetchDataFromApi } from "../../utils/Api";
import { fetchCategory } from "../../redux/category/asyncActions";
import { selectCategory } from "../../redux/category/selectors";

const Heading = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(selectFavorite);
  const { entities } = useSelector(selectCategory);
  const ref = React.useRef(false);

  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [scrollHeading, setScrollHeading] = React.useState<boolean>(false);

  // ПОкзаывать или скрывать основное меню
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };
  // ПОкзаывать или скрывать мобильное меню
  const handleClickMobileMEnu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleScrollHeading = () => {
    const offsetTop = window.scrollY;
    if (offsetTop > 0) {
      setScrollHeading(true);
    } else {
      setScrollHeading(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollHeading);
  }, []);

  // Добавления данных из избранного redux в localstorage
  React.useEffect(() => {
    if (ref.current) {
      const dataLocalStorage = JSON.stringify(items);
      localStorage.setItem("favItem", dataLocalStorage);
    }
    ref.current = true;
  }, [items]);

  // загрузка названий категорий
  React.useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <>
      <div className={`heading ${scrollHeading ? "scrolling" : ""}`}>
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading-wrapper__main">
              <div className="heading-wrapper__catalog">
                <Link to="/">
                  <div className="logo">FRESH</div>
                </Link>
                <div onClick={() => handleClickMenu()} className="catalog-btn">
                  <div className={`menu_icon ${!showMenu ? "" : "active-btn"}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Каталог</span>
                </div>
                <div
                  onClick={() => handleClickMobileMEnu()}
                  className="mobile-icon"
                >
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="heading-wrapper__search">
                <Search />
                <div className="search-nav">
                  <div className="search-nav__item">
                    <a href="">Акции</a>
                  </div>
                  <div className="search-nav__item">
                    <a href="">Рецепты</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-wrapper__icons">
              <Link to="/favorite">
                <div className="heading-wrapper__icons-item">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#179c49"
                    />
                  </svg>
                </div>
              </Link>
              <div className="heading-wrapper__icons-item">
                <Link to="/cart">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      id="页面-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Business"
                        transform="translate(-480.000000, -144.000000)"
                      >
                        <g
                          id="basket_fill"
                          transform="translate(480.000000, 144.000000)"
                        >
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M10.4636,3.28164 C11.2283391,2.36384783 12.6100181,2.32395297 13.4284042,3.16192917 L13.5364,3.28164 L17.4684,7.99996 L20.4528,7.99996 C21.331,7.99996 22.0375,8.7584 21.9373,9.65484 L21.8453424,10.4210773 L21.8453424,10.4210773 L21.7454433,11.1603324 L21.7454433,11.1603324 L21.6633364,11.7152836 L21.6633364,11.7152836 L21.5683391,12.3098119 L21.5683391,12.3098119 L21.4600362,12.9352476 L21.4600362,12.9352476 L21.3380125,13.5829209 L21.3380125,13.5829209 L21.2018528,14.2441624 C21.1301698,14.5767303 21.05303,14.911135 20.9702,15.2425 C20.7313111,16.1978778 20.433321,17.0740852 20.1375081,17.8257604 L19.9170141,18.3654582 L19.9170141,18.3654582 L19.7030815,18.8542037 L19.7030815,18.8542037 L19.501455,19.2877443 C19.4691953,19.3551644 19.4376877,19.4201071 19.4070519,19.4824838 L19.1581,19.9722 L19.1581,19.9722 C18.8371462,20.5813385 18.2344124,20.9416722 17.595138,20.9935038 L17.4347,21 L6.55426,21 C5.86955,21 5.19629,20.6446 4.84591,19.9921 L4.61293027,19.5418423 L4.61293027,19.5418423 L4.43317577,19.171822 C4.4019028,19.1056719 4.37003591,19.0373171 4.33766962,18.9668107 L4.13823539,18.5183747 C3.76439211,17.6504579 3.35299789,16.535 3.02987,15.2425 C2.97519095,15.0237857 2.92311508,14.8051875 2.87354793,14.58779 L2.73227819,13.9402837 L2.73227819,13.9402837 L2.60549408,13.3064885 L2.60549408,13.3064885 L2.49262888,12.6929113 L2.49262888,12.6929113 L2.39311588,12.1060596 L2.39311588,12.1060596 L2.30638837,11.5524403 L2.30638837,11.5524403 L2.23187963,11.0385607 L2.23187963,11.0385607 L2.14178704,10.3564878 L2.14178704,10.3564878 L2.07599895,9.80043219 C2.06996857,9.74646259 2.06435286,9.69523333 2.05914,9.64688 C1.96754842,8.79721368 2.59876404,8.07931934 3.40713478,8.00610516 L3.54341,7.99996 L6.53162,7.99996 L10.4636,3.28164 Z M9.96059039,12.721666 C9.821845,12.2405694 9.34145786,11.9292857 8.8356,12.0136 C8.32974214,12.0979143 7.97628607,12.5481653 8.00107282,13.0482541 L8.01361,13.1644 L8.51361,16.1644 L8.53941762,16.278334 C8.678155,16.7594306 9.15854214,17.0707143 9.6644,16.9864 C10.1702857,16.9020857 10.5237265,16.4518347 10.4989375,15.9517459 L10.4864,15.8356 L9.9864,12.8356 L9.96059039,12.721666 Z M15.1644,12.0136 C14.6585143,11.9292857 14.178151,12.2405694 14.0394092,12.721666 L14.0136,12.8356 L13.5136,15.8356 C13.4228,16.3804 13.7908,16.8956 14.3356,16.9864 C14.8414857,17.0707143 15.321849,16.7594306 15.4605908,16.278334 L15.4864,16.1644 L15.9864,13.1644 C16.0772,12.6196 15.7092,12.1044 15.1644,12.0136 Z M12,4.56201 L9.13504,7.99996 L14.865,7.99996 L12,4.56201 Z"
                            id="形状"
                            fill="#179c49"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
                <span className="count">15</span>
              </div>
              <div className="heading-wrapper__icons-item">
                <svg
                  fill="#179c49"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="_x32_"
                  viewBox="0 0 512 512"
                >
                  <style type="text/css"></style>
                  <g>
                    <path
                      className="st0"
                      d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087
		c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512
		c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"
                    />
                    <path
                      className="st0"
                      d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0
		c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="menu-block">
            {showMenu && <Menu showMenu={showMenu} items={entities} />}
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      )}
    </>
  );
};

export default Heading;
