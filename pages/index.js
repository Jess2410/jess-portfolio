import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { ProjectModal } from "../components/Projects/ProjectModal";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import styles from "../styles/Home.module.css";
import Paints from "../components/Paints/Paints";

export default function Home() {
  const [showModalProject, setShowModalProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState(null);
  return (
    <>
      {showModalProject ? (
        <ProjectModal
          onClose={() => setShowModalProject(false)}
          project={projectSelected}
        />
      ) : null}
      <div className={styles.container}>
        <Head>
          <title>Jess Portfolio</title>
        </Head>

        <Header />
        <Banner />
        <Projects
          setProjectSelected={setProjectSelected}
          setShowModalProject={setShowModalProject}
        />
        <Skills />
        <Paints />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
