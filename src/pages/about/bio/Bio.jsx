import React from "react";
import "./bio.css";
import { Link } from "react-router-dom";
import back from "../../../assets/icons/back.png";

const Bio = () => {
  return (
    <div className="Bio container">
      <Link to="/about">
        <div className="back_btn">
          <img src={back} alt="left-arrow" width={20} height={20} />
        </div>
      </Link>
      <div className="left_pane">
        <h1 className="name">I'M HARISH</h1>
      </div>
      <div className="right_pane"></div>
    </div>
  );
};

export default Bio;
