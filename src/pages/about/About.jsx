import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="About container">
      <div className="About_header">ABOUT</div>
      <div className="About_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem vel
        totam quae cumque obcaecati ipsum similique, quod eius odio maxime,
        nobis accusantium quos expedita, saepe maiores! A doloribus consectetur
        vero sapiente! Architecto sequi, deserunt eaque sed similique in cum
        culpa voluptates quisquam excepturi vel nihil repellat optio, iste
        dolorum!
      </div>
      <div className="About_tabs">
        <div className="row1">
          <Link to="bio">
            <div className="bio_tab rb"></div>
          </Link>
          <Link to="skills">
            <div className="skills_tab rb"></div>
          </Link>
        </div>
        <div className="row2">
          <Link to="projects">
            <div className="projects_tab rb"></div>
          </Link>
          <Link to="certificates">
            <div className="certificates_tab rb"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
