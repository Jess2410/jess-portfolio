import React, { useState } from "react";
// import { projectsData } from "../../data";
import Image from "next/image";
import styles from "./Paints.module.css";
import Skill from "./Paint";
import { paintsData, skillsData } from "../../data";
import Paint from "./Paint";

function Paints() {
  const { paints } = paintsData;

  // const [hover, setHover] = useState(false);

  return (
    <>
      <section id='paintings' className={styles.projects}>
        <h1>Paints</h1>
        <div className={styles.grid}>
          {paints.map((item, key) => {
            return <Paint key={key} item={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Paints;
