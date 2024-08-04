import { projectsData } from "../../data";
import styles from "./Projects.module.css";
import Project from "./Project";
import Image from "next/image";

function Projects({ setProjectSelected, setShowModalProject }) {
  const { projects, logos } = projectsData;

  const onSelectProject = (project) => {
    setProjectSelected(project);
    setShowModalProject(true);
  };
  return (
    <section id='projects' className={styles.projects}>
      <h1>projects.</h1>

      <div className={styles.grid}>
        {projects.map((projet, key) => {
          return (
            <Project
              key={key}
              projet={projet}
              onSelectProject={() => onSelectProject(projet)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
