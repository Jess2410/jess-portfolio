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
        <Image
          width={500}
          height={250}
          layout='responsive'
          src='/assets/menu.svg'
          alt={item.name}
        />
      )}
    </div>
  );
}

export default Project;
