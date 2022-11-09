import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import { toast } from "react-toastify";
import cloud from "../../public/assets/cloud.png";
import sun from "../../public/assets/sun.png";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// const initMessage = {
//     lastname: "",
//     firstname: "",
//     email : "",
//     message : "",
//     read: false,
//   }

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* <div className='line'></div> */}
      <section className={styles.contact} id='contact'>
        <div className={styles.content}>
          <div className={styles.contactForm}>
            <Image
              className={styles.img1}
              data-aos='fade-left'
              data-aos-duration='3000'
              width={300}
              height={300}
              src={cloud}
            />
            <form>
              <div className={styles.row100}>
                <div className={styles.inputBx50}>
                  <input type='text' name='lastname' placeholder='Last Name' />
                </div>
                <div className={styles.inputBx50}>
                  <input
                    type='text'
                    name='firstname'
                    placeholder='First Name'
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                  />
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <textarea placeholder='Message' name='message'></textarea>
                </div>
              </div>
              <div className={styles.row100}>
                <div className={styles.inputBx100}>
                  <Image
                    className={styles.img2}
                    data-aos='fade-right'
                    data-aos-duration='3000'
                    width={250}
                    height={250}
                    src={sun}
                  />
                  <button className={styles.button} type='submit'>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
