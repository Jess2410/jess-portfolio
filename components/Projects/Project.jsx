import React, { useState } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

function Project({ item, key }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      key={key}
      className={styles.gridItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover ? (
        <>
          <Image
            width={500}
            height={250}
            layout='responsive'
            src='/assets/win1.png'
            alt={item.name}
          />

          <h2>{item.name}</h2>
        </>
      ) : (
        <>
          <Image
            width={700}
            height={550}
            // layout='fill'
            layout='responsive'
            src={item.img}
            alt={item.name}
            className={styles.radius}
            objectFit='contain'
            // sizes='100vw'
          />
          <h2>{item.name}</h2>
        </>
      )}
    </div>
  );
}

export default Project;
