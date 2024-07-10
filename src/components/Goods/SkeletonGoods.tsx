import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonGoods = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={180}
    viewBox="0 0 320 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="13" y="10" rx="10" ry="10" width="305" height="155" />
  </ContentLoader>
);

export default SkeletonGoods;
