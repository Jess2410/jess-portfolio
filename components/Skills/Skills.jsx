import React, { useState } from "react";
// import { projectsData } from "../../data";
import Image from "next/image";
import styles from "./Skills.module.css";
import Skill from "./Skill";
import { paintingsData, skillsData } from "../../data";

function Skills() {
  const { skills } = skillsData;
  const { paintings } = paintingsData;

  // const [hover, setHover] = useState(false);

  return (
    <>
      <section id='skills' className={styles.projects}>
        <h1>Skills</h1>
        <div className={styles.grid}>
          {skills.map((item, key) => {
            return <Skill key={key} item={item} />;
          })}
        </div>
      </section>
      <section id='paintings' className={styles.projects}>
        <h1>Paintings</h1>
        <div className={styles.grid}>
          {paintings.map((item, key) => {
            return <Skill key={key} item={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;
