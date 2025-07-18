
import classes from "./About.module.css";
// import CV from "../../store/Resume.pdf" ;
import certificate from "../../store/Hizikyas Tamiru.pdf";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section id="AboutMe" className={classes.section}>
      <div className={classes["know-me"]}>
          <p>Know Me More</p>
      </div>

      <div className={classes["section-container"]}>
          <div className={classes["paragraph-container"]}>
              <h2>I'm <span className={classes["title-change"]}>Hizikyas Tamiru,</span> a MERN Developer</h2>
              <p className={classes["paragraph-1"]}>With over two years of hands-on experience in full-stack development, I specialize in building scalable web applications using MongoDB, Express.js, React, and Node.js. My goal is to deliver robust and maintainable solutions that offer seamless user experiences across devices.</p>
              <p className={classes["paragraph-2"]}>I thrive in tackling complex problems and turning ideas into functional products. From creating dynamic user interfaces to managing backend APIs, I take pride in delivering efficient, modern applications that align with business goals and user needs.</p>
          </div>

        <div className={classes["digital-container"]}>
          <ul>
            <li><span>Name:</span>Hizikyas Tamiru</li>
            <li><span>Email:</span><a href="mailto:hizikyastamiru@gmail.com">hizikyastamiru@gmail.com</a></li>
          </ul>
          <div className={classes.action}>
            <button onClick={() => window.open(certificate, "_blank")} on>Download CV <span><FaDownload /></span></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
