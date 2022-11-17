import styles from "./Modal.module.css";
import Image from "next/image";

export const ProjectModal = ({ project, onClose }) => {
  console.log("projectModal", project);
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <h2 className={styles.services_h2}>{project?.name}</h2>
            <Image
              src={project.img}
              layout='responsive'
              width={570}
              height={200}
            />
          </div>
          <p className={styles.services_descrption}>{project?.description}</p>
        </div>
        <div>
          <button className={styles.modalBtn} onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
