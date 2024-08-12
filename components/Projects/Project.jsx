import React, { useState } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";

function Project({ project, onSelectProject }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.gridItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelectProject}
    >
      <div className={styles.imageContainer}>
        <Image
          width={150}
          height={250}
          layout='responsive'
          src={project.img}
          alt={project.name}
          className={styles.radius}
        />
        {hover && (
          <div className={styles.hoverActions}>
            <button
              className={styles.actionButton}
              style={{ border: "#9F75FF 1px solid" }}
              onClick={onSelectProject}
            >
              Details
            </button>
            <a
              className={styles.modalBtn}
              rel='noopener noreferrer'
              href={project?.href}
              target='_blank'
            >
              {project.link && (
                <button
                  className={styles.actionButton}
                  style={{ background: "white", color: "#323d55" }}
                >
                  Discover
                </button>
              )}
            </a>
          </div>
        )}
      </div>
      <h2 className={styles.title}>{project.name}</h2>
    </div>
  );
}

export default Project;
