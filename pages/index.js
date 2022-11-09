import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jess Portfolio</title>
        {/* <meta name='description' content='Generated by create next app' /> */}
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <Header />
      <Banner />
      <Projects />
    </div>
  );
}
