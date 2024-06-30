import React from "react";
import "./ScrollBtn.scss";

interface PropsBtn {
  scrollingBtn: boolean;
}

const ScrollBtn = ({ scrollingBtn }: PropsBtn) => {
  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => handleClickBtn()}
      className={`scroll-btn ${scrollingBtn ? "is-active" : ""}`}
    >
      <svg
        width="38px"
        height="38px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V18M12 6L7 11M12 6L17 11"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollBtn;
