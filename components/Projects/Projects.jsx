import React from "react";
import { projectsData } from "../../data";
import Image from "next/image";
import styles from "./Projects.module.css";

function Projects() {
  const { projects } = projectsData;
  return (
    <div id='projects'>
      {projects.map((item, i) => {
        return (
          <div key={i} className={styles.wrapper}>
            <Image width={200} height={100} src='/assets/win1.png' />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
