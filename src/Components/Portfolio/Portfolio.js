import React, { useRef, useState } from "react";
import classes from "./portfolio.module.css";
import project1 from "../../store/project1.png";
import project2 from "../../store/project2.png"
import project3 from "../../store/project3.png"
import Profile4 from "../../store/Profile4.png"
import Profile5 from "../../store/Profile5.png"

const Portfolio = () => {
  const projects = [
    {
      title: "Klyra (Chat System Web App)",
      image: Profile4,
      alt: "klyra project",
      demoUrl: "https://klyra-inky.vercel.app/",
    },
    {
      title: "Deutsche Hochschule fur Medizin College",
      image: Profile5,
      alt: "deutsche college project",
      demoUrl: "https://xn--deutsche-hochschule-fr-medizin-college-17d.tech/",
      sold: true,
    },
    {
      title: "Property Management System",
      image: project2,
      alt: "property management project",
      demoUrl: "https://property-management-propease.vercel.app/",
    },
    {
      title: "Meal Management System",
      image: project1,
      alt: "meal management project",
      demoUrl: "https://foodhub-sable.vercel.app/",
    },
    {
      title: "Blog",
      image: project3,
      alt: "blog project",
      demoUrl: "https://blog-api-two-khaki.vercel.app/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const projectContainerRef = useRef(null);
  const projectCardRefs = useRef([]);

  const handleScroll = () => {
    const container = projectContainerRef.current;
    if (!container || !projectCardRefs.current.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    projectCardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  };

  const scrollToProject = (index) => {
    const container = projectContainerRef.current;
    const card = projectCardRefs.current[index];
    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft,
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

      <div
        className={classes["project-container"]}
        ref={projectContainerRef}
        onScroll={handleScroll}
      >
        {projects.map((project, index) => (
          <div
            className={classes["portfolio-container"]}
            key={project.title}
            ref={(element) => {
              projectCardRefs.current[index] = element;
            }}
          >
            <div className={classes["img-container"]}>
              <img
                src={project.image}
                alt={project.alt}
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
                onClick={() => window.open(project.demoUrl, "_blank", "noopener,noreferrer")}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={classes["dot-container"]}>
        {projects.map((project, index) => (
          <button
            key={`${project.title}-dot`}
            type="button"
            className={`${classes.dot} ${activeIndex === index ? classes["dot-active"] : ""}`}
            aria-label={`Go to ${project.title}`}
            onClick={() => scrollToProject(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
