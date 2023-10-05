import React from "react";
import searchIcon from "../../images/SVG/searchIcon.svg";
import filterImg from "../../images/SVG/filter.svg";

const Input = ({ onChange, value }) => {
  return (
    <div className="inputNavBar">
      <img src={searchIcon} alt="search" className="searchIcon" />
      <input type="text" onChange={onChange} value={value} />
      <img src={filterImg} alt="filter" className="filterIcon" />
    </div>
  );
};

export default Input;
