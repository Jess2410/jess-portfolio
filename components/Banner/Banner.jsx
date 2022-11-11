import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { navData } from "../../data";
import Typed from "react-typed";
import Image from "next/image";
import linkedin from "../../public/assets/linkedin.svg";
import instagram from "../../public/assets/instagram.svg";
import github from "../../public/assets/github.svg";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import { servicesData } from "../../data";
import Link from "next/link";
// import Typed from "react-typed";

export default function Banner() {
  const { services } = servicesData;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.home} id='home'>
      {/* BANNER */}
      <div className={styles.about}>
        <div className={styles.row}>
          {/* BANNER - LEFT */}
          <div className={styles.left}>
            <div className={styles.text}>
              <p>
                Hi, I&rsquo;m Jess !
                <br />
              </p>
              <p className={styles.text2}>
                I am passionate about <span>UI/UX Design</span> and
                <br></br>
                <span>Front End</span> Development based<br></br>
                in <span> Marseille</span> (France).
              </p>
            </div>
            <div className={styles.typed}>
              <Typed
                strings={[
                  "Web Developement",
                  "UX/UI Designer",
                  "Logos",
                  "Digital Illustrations",
                ]}
                typeSpeed={40}
                loop
              />
            </div>
            <ul className={styles.flex}>
              <li>
                <Link
                  href='https://www.instagram.com/art.jess2410/'
                  target='blank'
                  style={{ background: "#FE69B1" }}
                >
                  {" "}
                  <Image width={30} height={30} src={instagram} alt='icon' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/in/jessica-tounkara/'
                  target='blank'
                  style={{ background: "#51C8B7" }}
                >
                  {" "}
                  <Image width={30} height={30} src={linkedin} alt='icon' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/Jess2410'
                  target='blank'
                  style={{ background: "#6BA3E5" }}
                >
                  {" "}
                  <Image width={30} height={30} src={github} alt='icon' />
                </Link>
              </li>
            </ul>
          </div>
          {/* BANNER - RIGHT */}
          <div className={styles.right}>
            <div className={styles.videoDiv2}>
              <video
                className={styles.video2}
                height='100%'
                autoPlay
                loop
                muted
              >
                <source src='../../assets/video.mp4' type='video/mp4'></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
