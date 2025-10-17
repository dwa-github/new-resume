import styles from './Projects.module.css';
import parentStyles from '../content.module.css';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section className={parentStyles.contentSection}>
      <h2 className="subtitle">
        <span className={parentStyles.iconWrapper}>
          <FolderGit2 />
        </span>
        <span>Projects</span>
      </h2>
      <div className={`${parentStyles.entry} ${styles.projectEntry}`}>
        <h3 className="heading">Personal Portfolio Website</h3>
        <p className={parentStyles.date}>2023</p>
        <p>A responsive personal portfolio built with Next.js and deployed on Vercel, showcasing my projects and skills.</p>
      </div>
    </section>
  );
}
