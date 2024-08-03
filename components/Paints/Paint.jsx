import React, { useState } from "react";
import styles from "./Paints.module.css";
import Image from "next/image";

function Paint({ item, key }) {
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
          width={550}
          height={550}
          // style={{ justifyContent: "center" }}
          // layout='responsive'
          src={item.img}
          alt={item.name}
        />
      </div>
    </div>
  );
}

export default Paint;
