import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Поиск" />
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#a7a6a7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Search;
