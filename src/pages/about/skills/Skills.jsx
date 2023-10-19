import React from "react";
import back from "../../../assets/icons/left-arrow.png";
import { Link } from "react-router-dom";
import next from "../../../assets/icons/right-arrow.png";
import "./skills.css";

const Skills = () => {
  return (
    <div className="Projects container">
      <Link to="/about">
        <div className="back_btn">
          <img src={back} alt="left-arrow" width={20} height={20} />
        </div>
      </Link>
      <div className="slide_btns">
        <div className="back btn">
          <img src={back} alt="back_btn" />
        </div>
        <div className="next btn">
          <img src={next} alt="next_btn" />
        </div>
        <div className="front"></div>
      </div>
    </div>
  );
};

export default Skills;
