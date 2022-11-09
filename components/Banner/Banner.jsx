import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { navData } from "../../data";
import Typed from "react-typed";
import Image from "next/image";
import linkedin from "../../public/assets/linkedin.svg";

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
                <p className={styles.text2}>
                  I am passionate about <span>UI/UX Design</span> and
                  <br></br>
                  <span>Front End</span> Development.
                </p>
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
                <button style={{ background: "#FE69B1" }}>
                  {" "}
                  <Image width={30} height={30} src={linkedin} />
                </button>
              </li>
              <li>
                <button style={{ background: "#51C8B7" }}>
                  {" "}
                  <Image width={30} height={30} src={linkedin} />
                </button>
              </li>
              <li>
                <button style={{ background: "#6BA3E5" }}>
                  {" "}
                  <Image width={30} height={30} src={linkedin} />
                </button>
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
