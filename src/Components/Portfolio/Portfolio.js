import React, { useRef, useState } from "react";
import classes from "./portfolio.module.css";
import project1 from "../../store/project1.png";
import project2 from "../../store/project2.png";
import project3 from "../../store/project3.png";
import Profile4 from "../../store/Profile4.png";
import Profile5 from "../../store/Profile5.png";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      img: Profile4,
      title: "Klyra (Chat System Web App)",
      link: "https://klyra-inky.vercel.app/",
    },
    {
      img: Profile5,
      title: "Deutsche Hochschule für Medizin College",
      sold: true,
      link: "https://xn--deutsche-hochschule-fr-medizin-college-17d.tech/",
    },
    {
      img: project2,
      title: "Property Management System",
      link: "https://property-management-propease.vercel.app/",
    },
    {
      img: project1,
      title: "Meal Management System",
      link: "https://foodhub-sable.vercel.app/",
    },
    {
      img: project3,
      title: "Blog",
      link: "https://blog-api-two-khaki.vercel.app/",
    },
  ];

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 20;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section id="Portfolio" className={classes.section}>
      <div className={classes["portfolio-header"]}>
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>

      <div className={classes["slider-wrapper"]}>
        <div className={classes["project-container"]} ref={scrollRef}>
          {projects.map((project, index) => (
            <div key={index} className={classes["portfolio-container"]}>
              <div className={classes["img-container"]}>
                <img
                  src={project.img}
                  alt="project"
                  className={classes["project-img"]}
                />
              </div>

              <p className={classes["project-title"]}>
                {project.title}
                {project.sold && (
                  <span className={classes["sold-badge"]}>SOLD</span>
                )}
              </p>

              <div className={classes["btn-container"]}>
                <button
                  className={classes.btn}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className={classes["dots-container"]}>
          {projects.map((_, index) => (
            <span
              key={index}
              className={`${classes.dot} ${
                activeIndex === index ? classes.activeDot : ""
              }`}
              onClick={() => scrollToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;