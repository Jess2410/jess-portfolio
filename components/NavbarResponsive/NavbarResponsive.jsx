import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navData } from "../../data";
import styles from "./NavbarResponsive.module.css";
import Image from "next/image";
import Aos from "aos";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function NavbarResponsive() {
  //destructure navData
  const { items } = navData;

  const [checkWidth, setcheckWidth] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);
  const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);

  useEffect(() => {
    Aos.init();
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
    console.log(showNavbarResponsive);
  };

  return (
    <>
      {showNavbarResponsive && (
        <div className={styles.NavbarResponsive}>
          <div>
            <button onClick={showNavbar} className={styles.navBtn}>
              <CloseRoundedIcon />
            </button>
          </div>
          {items.map((item, i) => {
            return (
              <li id='li' key={i} className={styles.header_navbar_li}>
                <Link
                  href={item.href}
                  className={styles.header_navbar_li_a}
                  onClick={closeNavbar}
                >
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
      )}
    </>
  );
}
