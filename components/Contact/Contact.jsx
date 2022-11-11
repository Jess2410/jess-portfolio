import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import Image from "next/image";
import { toast } from "react-toastify";
import cloud from "../../public/assets/cloud.png";
import sun from "../../public/assets/sun.png";
import emailjs from "@emailjs/browser";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const loader = toast.loading("Veuillez patienter...");
    emailjs
      .sendForm(
        "service_gmf8g07",
        "template_hk6cecm",
        form.current,
        "2lN5J7TEq8PM4hPM4"
      )
      .then(
        (result) => {
          // SUCCESS console.log(result.text);
          toast.update(loader, {
            render: "Message envoyé avec succès !",
            type: "success",
            autoClose: 3000,
            isLoading: false,
          });
        },
        (error) => {
          // ERROR console.log(error.text);
          toast.update(loader, {
            render: "Une erreur est survenue !",
            type: "error",
            autoClose: 3000,
            isLoading: false,
          });
        }
      );
    e.target.reset();
  };

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
              alt='cloud'
            />
            <form ref={form} onSubmit={sendEmail}>
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
                  <input type='tel' name='phone' placeholder='Phone Number' />
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
                    alt='sun'
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
