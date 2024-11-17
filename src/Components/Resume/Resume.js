import classes from "./Resume.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import certificate from "../../store/Udacity_Certeficate.pdf";

const Resume = () => {
  return (
    <section id="resume" className={classes.section}>
      <div className={classes["header-line"]}>
        <p>Resume </p>
      </div>

      <div className={classes["resume-container"]}>
        <div className={classes["my-education-container"]}>
          <h2 className={classes["containers-title"]}>My Education</h2>

          <div className={classes["computer-container"]}>
            <h3>Computer Engineering</h3>
            <p className={classes["light-title"]}>Bahirdar university</p>
            <p className={classes.tired}>
              Undergraduate Computer Engineering student, graduating in 2026,
              with a strong foundation in hardware and software integration, and
              system design.
            </p>
          </div>
          <div className={classes["web-development-container"]}>
            <div>
              <h3>Web Development</h3>
            </div>
            <div className={classes["referense-container"]}>
              <p className={classes["light-title"]}>Udacity</p>
              <span
                className={classes.torefer}
                onClick={() => window.open(certificate, "_blank")}
              > reference</span>
            </div>{" "}
            <p className={classes.tired}>
              Frontend web developer passionate about building responsive,
              intuitive user interfaces and delivering seamless,
              high-performance web experiences.
            </p>
          </div>
        </div>

        <div className={classes["myexperiance-container"]}>
          <h2 className={classes["containers-title"]}>My Experiance</h2>
          <div className={classes["computer-experiance"]}>
            <h3>Internship</h3>
            <p className={classes["light-title"]}>Circuit Design</p>
            <p className={classes.tired}>
              Experience in hardware-software integration, system design, and
              debugging, with projects in embedded systems, circuit design, and
              microcontrollers.
            </p>
          </div>
          <div className={classes["web-development-experiance"]}>
            <h3>Freelance</h3>
            <p className={classes["light-title"]}>Frontend Developer</p>
            <p className={classes.tired}>
              3+ years of experience in frontend development, proficient in
              React, JavaScript, HTML, and CSS, with multiple completed projects
              focused on responsive web design and user interfaces.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["skill-title"]}>
        <h3>My Skills</h3>
      </div>
      <div className={classes["my-skill-container"]}>
        
        <div className={classes["col-1"]}>
          
        <div className={classes.item}>
    <div className={classes.badge}>
        <BsFillPatchCheckFill />
    </div>
    <div className={classes.dre}>
        <div className={classes["skill-text"]}>
            <span>Web Design</span>
            <span className={classes["w-90"]}>90%</span>
        </div>
        <div className={classes["skill-progress"]}>
            <div className={`${classes["skill-progress-bar"]} ${classes["w-90"]}`}></div>
        </div>
    </div>
</div>


<div className={classes.item}>
    <div className={classes.badge}>
        <BsFillPatchCheckFill />
    </div>
    <div className={classes.dre}>
        <div className={classes["skill-text"]}>
            <span>Javascript</span>
            <span className={classes["w-95"]}>95%</span>
        </div>
        <div className={classes["skill-progress"]}>
            <div className={`${classes["skill-progress-bar"]} ${classes["w-95"]}`}></div>
        </div>
    </div>
</div>


<div className={classes.item}>
    <div className={classes.badge}>
        <BsFillPatchCheckFill />
    </div>
    <div className={classes.dre}>
        <div className={classes["skill-text"]}>
            <span>Tailwind</span>
            <span className={classes["w-40"]}>40%</span>
        </div>
        <div className={classes["skill-progress"]}>
            <div className={`${classes["skill-progress-bar"]} ${classes["w-40"]}`}></div>
        </div>
    </div>
</div>

        </div>

        <div className={classes["col-2"]}>

        <div className={classes.item}>
    <div className={classes.badge}>
        <BsFillPatchCheckFill />
    </div>
    <div className={classes.dre}>
        <div className={classes["skill-text"]}>
            <span>HTML/CSS</span>
            <span className={classes["w-96"]}>96%</span>
        </div>
        <div className={classes["skill-progress"]}>
            <div className={`${classes["skill-progress-bar"]} ${classes["w-96"]}`}></div>
        </div>
    </div>
</div>


<div className={classes.item}>
    <div className={classes.badge}>
        <BsFillPatchCheckFill />
    </div>
    <div className={classes.dre}>
        <div className={classes["skill-text"]}>
            <span>React js</span>
            <span className={classes["w-85"]}>85%</span>
        </div>
        <div className={classes["skill-progress"]}>
            <div className={`${classes["skill-progress-bar"]} ${classes["w-85"]}`}></div>
        </div>
    </div>
</div>


<div className={classes.item}>
    <div className={classes.badge}>
        <BsFillPatchCheckFill />
    </div>
    <div className={classes.dre}>
        <div className={classes["skill-text"]}>
            <span>Bootstrap</span>
            <span className={classes["w-40"]}>40%</span>
        </div>
        <div className={classes["skill-progress"]}>
            <div className={`${classes["skill-progress-bar"]} ${classes["w-40"]}`}></div>
        </div>
    </div>
</div>

        </div>

      </div>
    </section>
  );
};

export default Resume;
