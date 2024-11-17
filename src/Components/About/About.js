
import classes from "./About.module.css";
// import CV from "../../store/Resume.pdf" ;
import certificate from "../../store/Resume.pdf";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section id="AboutMe" className={classes.section}>
      <div className={classes["know-me"]}>
          <p>Know Me More</p>
      </div>

      <div className={classes["section-container"]}>
        <div className={classes["paragraph-container"]}>
            <h2>I'm <span className={classes["title-change"]}>Hizikyas Tamiru,</span> a web Developer</h2>
            <p className={classes["paragraph-1"]}>With over three years of dedicated experience in frontend development, I have gained expertise in building responsive and interactive user interfaces while ensuring optimal performance across various platforms. My focus on delivering visually appealing and functional web applications aligns with the latest industry standards and client needs.</p>
            <p className={classes["paragraph-2"]}>I’m confident in my ability to manage and execute projects that meet client expectations. My problem-solving skills and attention to detail enable me to create efficient, user-friendly solutions. Whether enhancing existing platforms or building from scratch, I am committed to delivering high-quality results.</p>
        </div>
        <div className={classes["digital-container"]}>
          <ul>
            <li><span>Name:</span>Hizikyas Tamiru</li>
            <li><span>Email:</span><a href="mailto:hizikyastamiru@gmail.com">hizikyastamiru@gmail.com</a></li>
            <li><span>Age:</span>22</li>
            <li><span>From:</span>Bahir Dar , Ethiopia</li>
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
