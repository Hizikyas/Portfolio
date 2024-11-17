import classes from "./Navbar.module.css";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState , useEffect } from "react";


const Navbar = props => {
  const [content, setContent] = useState("Hizikyas Tamiru");
  const[isopen , setIsopen] = useState(false) ;

  const [activeLink, setActiveLink] = useState(""); 

  const toggleHandler = (link) => {
    setActiveLink(link);
     setIsopen( prev => !prev) ;
     
  };

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 252px)");
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setContent("Hizikyas");
      } else {
        setContent("Hizikyas Tamiru");
      }
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <div id="logo" className={classes.logo}>{content}</div>
            
            <ul className={isopen ? `${classes["nav-link"]} ${classes.activer}` : classes["nav-link"]}>
      <li>
        <a href="#Home"
           onClick={() => toggleHandler("Home")}
           className={activeLink === "Home" ? classes.active : ""}>
           Home
        </a>
      </li>
      <li>
        <a href="#AboutMe"
           onClick={() => toggleHandler("About")}
           className={activeLink === "About" ? classes.active : ""}>
           About
        </a>
      </li>
      <li>
        <a href="#resume"
           onClick={() => toggleHandler("Resume")}
           className={activeLink === "Resume" ? classes.active : ""}>
           Resume
        </a>
      </li>
      <li>
        <a href="#Portfolio"
           onClick={() => toggleHandler("Project")}
           className={activeLink === "Project" ? classes.active : ""}>
           Project
        </a>
      </li>
      <li>
        <a href="#contact"
           onClick={() => toggleHandler("Contact")}
           className={activeLink === "Contact"  ? classes.active : ""}>
           Contact
        </a>
      </li>
    </ul>
            <div className={classes.icon} onClick={toggleHandler}>
                <FaBars className={isopen ? classes.hidden : classes.visible} />
                <RiCloseLargeLine className={isopen ? classes.visible : classes.hidden} />
            </div>

          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;



