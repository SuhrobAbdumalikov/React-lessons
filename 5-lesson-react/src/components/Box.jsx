// import { ReactPropTypes } from "react";
import "./box.css";

export const Box = ({ size = "", ...otherProps }) => {
  return <div className={`box${size}`} {...otherProps} />;
};
