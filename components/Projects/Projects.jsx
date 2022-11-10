import React from "react";
import { projectsData } from "../../data";
import Image from "next/image";
import styles from "./Projects.module.css";

function Projects() {
  const { projects } = projectsData;
  return (
    <section id='projects' className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.grid}>
        {projects.map((item, i) => {
          return (
            <div key={i} className={styles.gridItem}>
              <Image
                width={500}
                height={250}
                layout='responsive'
                src='/assets/win1.png'
              />
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
