import React, { useState } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

function Project({ projet, onSelectProject }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.gridItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelectProject}
    >
      {!hover ? (
        <>
          <Image
            width={500}
            height={250}
            layout='responsive'
            src='/assets/win1.png'
            alt={projet.name}
          />

          <h2>{projet.name}</h2>
        </>
      ) : (
        <>
          <Image
            width={700}
            height={550}
            // layout='fill'
            layout='responsive'
            src={projet.img}
            alt={projet.name}
            className={styles.radius}
            objectFit='contain'
            // sizes='100vw'
          />
          <h2>{projet.name}</h2>
        </>
      )}
    </div>
  );
}

export default Project;
