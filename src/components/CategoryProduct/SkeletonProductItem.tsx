import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonProductItem = () => (
  <ContentLoader
    speed={2}
    width={305}
    height={350}
    viewBox="0 0 305 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-4" y="3" rx="2" ry="2" width="305" height="190" />
    <rect x="10" y="215" rx="0" ry="0" width="92" height="20" />
    <rect x="205" y="210" rx="0" ry="0" width="83" height="18" />
    <rect x="11" y="254" rx="0" ry="0" width="273" height="23" />
    <rect x="14" y="300" rx="0" ry="0" width="168" height="37" />
    <rect x="237" y="303" rx="0" ry="0" width="53" height="33" />
  </ContentLoader>
);

export default SkeletonProductItem;
