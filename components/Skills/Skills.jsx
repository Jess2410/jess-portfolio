import React, { useState } from "react";
// import { projectsData } from "../../data";
import Image from "next/image";
import styles from "./Skills.module.css";
import Skill from "./Skill";
import { paintingsData, skillsData } from "../../data";
import Paint from "./Skill";

function Skills() {
  const { skills } = skillsData;

  // const [hover, setHover] = useState(false);

  return (
    <>
      <section id='skills' className={styles.projects}>
        <h1>Skills</h1>
        <div className={styles.grid}>
          {skills.map((item, key) => {
            return <Paint key={key} item={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;
