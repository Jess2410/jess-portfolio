import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <section class={styles.footer}>
      <p>© {new Date().getFullYear()} - Jess.</p>
    </section>
  );
}

export default Footer;
