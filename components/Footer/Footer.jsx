import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <p>© {new Date().getFullYear()}</p>
    </section>
  );
}

export default Footer;
