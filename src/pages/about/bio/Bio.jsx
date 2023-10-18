import React from "react";
import "./bio.css";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div className="Bio container">
      <Link to="/about">
        <div className="back_btn"></div>
      </Link>
      <div className="left_pane">
        <h1 className="name">I'M HARISH</h1>
      </div>
      <div className="right_pane"></div>
    </div>
  );
};

export default Bio;
