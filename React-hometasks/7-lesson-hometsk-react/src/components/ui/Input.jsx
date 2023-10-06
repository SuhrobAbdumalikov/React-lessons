import React from "react";
import searchIcon from "../../images/SVG/searchIcon.svg";
import filterImg from "../../images/SVG/filter.svg";

const Input = ({ onChange, value }) => {
  return (
    <div className="inputNavBar">
      <img src={searchIcon} alt="search" className="searchIcon" data-aos="fade-down"/>
      <input type="text" onChange={onChange} value={value} data-aos="fade-down"/>
      <img src={filterImg} alt="filter" className="filterIcon" data-aos="fade-down"/>
    </div>
  );
};

export default Input;
