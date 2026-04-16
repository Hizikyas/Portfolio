
import classes from "./About.module.css";
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
              <p className={classes["paragraph-1"]}>With over three years of hands-on experience as a full-stack developer, I specialize in building scalable web applications across diverse technologies and environments. My goal is to deliver robust, maintainable solutions that provide seamless user experiences across devices.</p>
              <p className={classes["paragraph-2"]}>I enjoy tackling complex problems and turning ideas into functional products. From crafting dynamic user interfaces to developing efficient backend systems, I focus on building modern applications that align with business goals and user needs.</p>
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
