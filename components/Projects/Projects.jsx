import { projectsData } from "../../data";
import styles from "./Projects.module.css";
import Project from "./Project";
import { useState } from "react";

function Projects({ setProjectSelected, setShowModalProject }) {
  const { projects } = projectsData;

  const [categoryselected, setCategorySelected] = useState("All");

  const filteredProjects =
    categoryselected === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(categoryselected)
        );

  const onSelectProject = (project) => {
    setProjectSelected(project);
    setShowModalProject(true);
  };

  return (
    <section id='projects' className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.select}>
        <select
          name='categories'
          id='categories'
          onChange={(e) => setCategorySelected(e.target.value)}
          value={categoryselected}
        >
          <option value='All'>All categories</option>
          <option value='Design'>Design 🖌️</option>
          <option value='Web Development'>Web Development 💻</option>
        </select>
      </div>
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            project={project}
            onSelectProject={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
