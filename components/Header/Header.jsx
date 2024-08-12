import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import close from "../../public/assets/close.svg";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import portfolio from "../../public/assets/portfolio.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { navData } from "../../data";

export default function Header() {
  const { items } = navData;

  const [checkWidth, setCheckWidth] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);
  const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 100;
    if (window.scrollY > scrollThreshold) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const checkWidthFunc = () => {
    setCheckWidth(window.innerWidth);
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setcheckWidth(window.innerWidth);
  //     window.addEventListener("resize", checkWidthFunc);
  //   }
  //   return () => {
  //     window.removeEventListener("resize", checkWidthFunc);
  //   };
  // }, []);

  const showNavbar = () => {
    setToggleNav(!toggleNav);
    setShowNavbarResponsive(!showNavbarResponsive);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCheckWidth(window.innerWidth);
      window.addEventListener("resize", checkWidthFunc);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("resize", checkWidthFunc);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* HEADER */}
      <header
        id='header'
        className={`${styles.header} ${isBlurred ? styles.blurred : ""}`}
      >
        <a className={styles.logo} href='#'>
          <Image
            width={50}
            height={50}
            layout='responsive'
            src={portfolio}
            alt='portfolio'
            className={styles.logo}
          />
        </a>
        <nav>
          <ul className={styles.header_navbar}>
            {checkWidth > 1200 ? (
              items.map((item, i) => {
                return (
                  <li id='li' key={i} className={styles.header_navbar_li}>
                    <Link
                      href={item.href}
                      className={styles.header_navbar_li_a}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })
            ) : showNavbarResponsive ? (
              <button onClick={showNavbar} className={styles.navBtn}>
                <Image height={30} width={30} src={close} alt='icon' />
              </button>
            ) : (
              <button onClick={showNavbar} className={styles.navBtn}>
                <MenuRoundedIcon style={{ color: "#7916ff" }} />
              </button>
            )}
            {showNavbarResponsive && (
              <div className={styles.NavbarResponsive}>
                <div>
                  <button onClick={showNavbar} className={styles.navRespBtn}>
                    <CloseRoundedIcon />
                  </button>
                </div>
                {items.map((item, i) => {
                  return (
                    <li id='li' key={i} className={styles.header_navbarResp_li}>
                      <Link
                        href={item.href}
                        onClick={showNavbar}
                        className={styles.header_navbarResp_li_a}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                <li id='li' className={styles.header_navbarResp_li}>
                  <Link
                    href='#contact'
                    onClick={showNavbar}
                    className={styles.header_navbarResp_li_a}
                  >
                    Contact
                  </Link>
                </li>
              </div>
            )}
            {checkWidth > 1200 ? (
              <Link href='#contact' className={styles.header_navbar_li_button}>
                Contact
              </Link>
            ) : null}
          </ul>
        </nav>
      </header>
    </div>
  );
}
