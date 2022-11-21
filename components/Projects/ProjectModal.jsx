import styles from "./Modal.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { BASE_URI } from "../../public/assets/app.config";

export const ProjectModal = ({ project, onClose }) => {
  console.log("projectModal", project);

  const host_url = `${process.env.VERCEL_URL}/`;

  const router = useRouter();
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          <Image src='/assets/close.png' width={20} height={20} alt='close' />
        </button>
        <div className={styles.iconBx}>
          <Image
            src={project.img}
            layout='responsive'
            width={570}
            height={200}
            alt={project.name}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.h2}>{project?.name}</h2>
          <h3 className={styles.h3}>{project?.subtitle}</h3>
          <p>{project?.description}</p>
          <div className={styles.btnContent}>
            <Link
              className={styles.modalBtn}
              rel='noopener'
              href={project?.href}
              //   passHref={true}
              //   onClick={() => router.push(`${project?.href}`)}
            >
              View Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
