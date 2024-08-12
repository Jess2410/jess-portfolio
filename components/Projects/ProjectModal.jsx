import styles from "./Modal.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const ProjectModal = ({ project, onClose }) => {
  console.log("projectModal", project);

  const router = useRouter();

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          <CloseRoundedIcon style={{ color: "white" }} />
        </button>
        <div className={styles.textContent}>
          <div className={styles.iconBx}>
            <Image
              src={project.img}
              layout='responsive'
              width={500}
              height={200}
              alt={project.name}
            />
          </div>
          <h2 className={styles.h2}>{project?.name}</h2>
          <h3 className={styles.h3}>{project?.subtitle}</h3>
          <p>{project?.description}</p>
          <ul className={styles.list}>
            {project.skills &&
              project.skills.map((skill, key) => <li key={key}>{skill}</li>)}
          </ul>
          <br />
          {project.link && (
            <div className={styles.modalBtn}>
              <Link
                className={styles.modalBtn}
                rel='noopener'
                href={project?.href}
                target='_blank'
              >
                More
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
