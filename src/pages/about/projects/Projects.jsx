import React, { useEffect, useState } from "react";
import back from "../../../assets/icons/left-arrow.png";
import { Link } from "react-router-dom";
import next from "../../../assets/icons/right-arrow.png";
import "./projects.css";

const root = document.querySelector(":root");

const projects = [
  {
    name: "Projects 1",
    imgurl: "https://",
    link: "https://",
    desc: "hello",
  },
  {
    name: "Projects 1",
    imgurl: "https://",
    link: "https://",
    desc: "hello",
  },
  {
    name: "Projects 1",
    imgurl: "https://",
    link: "https://",
    desc: "hello",
  },
  {
    name: "Projects 1",
    imgurl: "https://",
    link: "https://",
    desc: "hello",
  },
  {
    name: "Projects 1",
    imgurl: "https://",
    link: "https://",
    desc: "hello",
  },
];
const Projects = () => {
  const [slide, setSlide] = useState(0);

  const slideRight = () => {
    if (slide > -380 * 4) setSlide((prev) => prev - 380);
    else setSlide(0);
  };

  const slideLeft = () => {
    if (slide < 0) setSlide((prev) => prev + 380);
    else setSlide(-1520);
  };

  useEffect(() => {
    console.log(slide);
    root.style.setProperty("--transform", slide + "px");
  }, [slide]);

  return (
    <div className="Projects container">
      <Link to="/about">
        <div className="back_btn">
          <img src={back} alt="left-arrow" width={20} height={20} />
        </div>
      </Link>
      <div className="slide_btns">
        <div className="back btn" onClick={() => slideLeft()}>
          <img src={back} alt="back_btn" />
        </div>
        <div className="next btn" onClick={() => slideRight()}>
          <img src={next} alt="next_btn" />
        </div>
      </div>
      <div className="slide_container">
        <div className="slides">
          {projects.map((project, index) => (
            <div
              className={`slide ${
                Math.abs(slide / 380) === index ? "open" : null
              }`}
              key={index}
            >
              <div className="image_container">
                <img src={project.imgurl} alt="project_image" />
              </div>
              <div className="heading">{project.name}</div>
              <div className="desc">{project.desc}</div>
              <a href={project.link}>View</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
