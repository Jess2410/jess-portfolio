import Link from "next/link";
import React from "react";
import { navData } from "../../data";
import styles from "./NavbarResponsive.module.css";

export default function NavbarResponsive() {
  //destructure navData
  const { items } = navData;

  return (
    <div className={styles.NavbarResponsive}>
      {items.map((item, i) => {
        return (
          <li id='li' key={i} className={styles.header_navbar_li}>
            <Link href={item.href} className={styles.header_navbar_li_a}>
              {item.name}
            </Link>
          </li>
        );
      })}
      <li id='li' className={styles.header_navbar_li}>
        <Link href='#contact' className={styles.header_navbar_li_a}>
          Contact
        </Link>
      </li>
    </div>
  );
}
