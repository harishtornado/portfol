import React from "react";
import back from "../../../assets/icons/back.png";
import { Link } from "react-router-dom";
import "./skills.css";

const Skills = () => {
  return (
    <div className="Projects container">
      <Link to="/about">
        <div className="back_btn">
          <img src={back} alt="left-arrow" width={20} height={20} />
        </div>
      </Link>
      
    </div>
  );
};

export default Skills;
