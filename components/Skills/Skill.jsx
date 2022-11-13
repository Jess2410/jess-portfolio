import React, { useState } from "react";
import styles from "./Skills.module.css";
import Image from "next/image";

function Skill({ item, key }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      key={key}
      className={styles.gridItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.imgBx}>
        <Image
          width={150}
          height={150}
          // style={{ justifyContent: "center" }}
          layout='responsive'
          src={item.img}
          alt={item.name}
        />
      </div>

      <h2>{item.name}</h2>
    </div>
  );
}

export default Skill;
