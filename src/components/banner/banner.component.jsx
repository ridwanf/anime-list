import React from "react";
import "./banner.styles.css";

const Banner = ({urlImage}) => {
  return (
    <div className="anime-detail-header-wrap">
      <div
        className="anime-detail-banner"
        style={{ backgroundImage: `url(${urlImage})` }}
      >
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Banner;
