import React from "react";
import classes from "./Home.module.css";
import profile_Picture from "../../store/Profile.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const AboutMe = props => {
  return (
    <section id="Home" className={classes.section}>
      <div className={classes.home}>
        <div className={classes["profile_Picture"]}>
          <img src={profile_Picture} alt="Profile_Picture" />
        </div>
        <div className={classes["section-text"]}>
          <p className={classes["section-text__p1"]}>Hello, I'm</p>
          <h1 className={classes.title}>Hizikyas Tamiru</h1>
          <p className={classes["section-text__p2"]}>Frontend Developer</p>
          <div className={classes["button-container"]}>
            <button
              className={`${classes.btn} ${classes["btn-color-2"]}`}
              onClick={(event) => {
                 event.preventDefault() ;
                   
                 return  (window.location.href = "./#contact")}}
            >
              Contact Info
            </button>
          </div>
          <div className={classes["social-container"]}>
            <FaSquareGithub 
              className={classes.icon}
              onClick={() => window.open("https://github.com/Hizikyas/Portfolio.git", "_blank")}
            />
            <FaLinkedin
              className={classes.icon}
              onClick={() => window.open("https://www.linkedin.com/in/hizikyastamiru/", "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
