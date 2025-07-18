import React from "react";
import classes from "./portfolio.module.css";
import project1 from "../../store/project1.png";
import project2 from "../../store/project2.png"
import project3 from "../../store/project3.png"

const Portfolio = () => {
  return (
    <section id="Portfolio" className={classes.section}>
      <div className={classes["portfolio-header"]}>
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>

      <div className={classes["project-container"]}>

        <div className={classes["portfolio-container"]}>
          <div className={classes["img-container"]}>
            <img
              src={project3}
              alt="project-3"
              className={classes["project-img"]}
            />
          </div>

          <p className={classes["project-title"]}>Blog</p>

          <div className={classes["btn-container"]}>
            <button className={classes.btn} onClick={() => window.open("https://blog-api-two-khaki.vercel.app/" , "_blank")}>Live Demo</button>
          </div>
        </div>

        <div className={classes["portfolio-container"]}>
          <div className={classes["img-container"]}>
            <img
              src={project2}
              alt="project-2"
              className={classes["project-img"]}
            />
          </div>

          <p className={classes["project-title"]}>Property Management System</p>

          <div className={classes["btn-container"]}>
            <button className={classes.btn} onClick={() => window.open("https://property-management-propease.vercel.app/" , "_blank")}>Live Demo</button>
          </div>
        </div>

        <div className={classes["portfolio-container"]}>
          <div className={classes["img-container"]}>
            <img
              src={project1}
              alt="project-1"
              className={classes["project-img"]}
            />
          </div>

          <p className={classes["project-title"]}>Meal Management System</p>

          <div className={classes["btn-container"]}>
            {/* <button
              className={classes.btn}
              onClick={() => window.open("https://github.com/Hizikyas/foodhub.git", "_blank")}
            >
              Github
            </button> */}
            <button className={classes.btn} onClick={() => window.open("https://foodhub-sable.vercel.app/" , "_blank")}>Live Demo</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
