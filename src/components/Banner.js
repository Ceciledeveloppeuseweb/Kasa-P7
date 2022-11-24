import React from "react";

const Banner = ({children, moreclass}) => {
  return <div className={`banner ${moreclass}`}>{children}</div>;
};

export default Banner;
