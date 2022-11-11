import React, { useState } from "react";
import { projectsData } from "../../data";
import Image from "next/image";
import styles from "./Projects.module.css";
import Project from "./Project";

function Projects() {
  const { projects } = projectsData;

  // const [hover, setHover] = useState(false);

  return (
    <section id='projects' className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.grid}>
        {projects.map((item, key) => {
          return (
            <Project
              key={key}
              item={item}
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
