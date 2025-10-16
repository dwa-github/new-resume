import styles from './projects.module.css';
import parentStyles from '../content.module.css';

export default function Projects() {
  return (
    <section className={parentStyles.contentSection}>
      <h2 className="subtitle">Projects</h2>
      <div className={parentStyles.entry}>
        <h3 className="heading">Personal Portfolio Website</h3>
        <p className={parentStyles.date}>2023</p>
        <p>A responsive personal portfolio built with Next.js and deployed on Vercel, showcasing my projects and skills.</p>
      </div>
    </section>
  );
}
