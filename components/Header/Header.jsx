import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { navData } from "../../data";

// import navData
// import { navData } from "../../data";
// import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";

export default function Header() {
  const { items } = navData;

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [checkWidth, setcheckWidth] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);
  const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const checkWidthFunc = () => {
    setcheckWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setcheckWidth(window.innerWidth);
      window.addEventListener("resize", checkWidthFunc);
    }
    return () => {
      window.removeEventListener("resize", checkWidthFunc);
    };
  }, []);

  const showNavbar = () => {
    setToggleNav(!toggleNav);
    setShowNavbarResponsive(!showNavbarResponsive);
  };

  return (
    <>
      {/* HEADER */}
      <header id='header' className={styles.header}>
        <a className={styles.logo} href='#'>
          J<span>ESS</span>
        </a>
        <nav>
          <ul
            className={styles.header_navbar}
            data-aos='fade-right'
            data-aos-duration='3000'
          >
            {items.map((item, i) => {
              return (
                <li id='li' key={i} className={styles.header_navbar_li}>
                  <Link href={item.href} className={styles.header_navbar_li_a}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <Link href='#contact' className={styles.header_navbar_li_button}>
              Contact
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
