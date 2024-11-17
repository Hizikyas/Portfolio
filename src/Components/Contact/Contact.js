import classes from "./Contact.module.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={classes.section}>
      <div className={classes["contact-header"]}>
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
      </div>
      <div className={classes.contain}>
        <div className={classes["contact-container"]}>
          <div className={classes["contact-info-container"]}>
            <IoIosMail className={classes.icons} />
            <p>
              <a href="mailto:hizikyastamiru@gmail.com">
                hizikyastamiru@gmail.com
              </a>
            </p>
          </div>

          <div className={classes["contact-info-container"]}>
            <FaLinkedin className={classes.icon} />
            <p>
              <a href="https://www.linkedin.com/in/hizikyastamiru/" target=" _blank ">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
      <footer className={classes.bottom}>
        <nav>
          <ul className={classes["nav-link"]}>
              <li><a href="#Home">Home</a></li>
              <li><a href="#AboutMe">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#Portfolio">project</a></li>
          </ul>
        </nav>
      <p>Copyright &#169; 2024 Hizikyas Tamiru . All Rights Reserved. </p>
      </footer>
    </section>
  );
};

export default Contact;
