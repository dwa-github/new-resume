import styles from './experience.module.css';
import parentStyles from '../content.module.css';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className={parentStyles.contentSection}>
      <h2 className="subtitle">
        <span className={parentStyles.iconWrapper}>
          <Briefcase />
        </span>
        <span>Experience</span>
      </h2>
      <div className={parentStyles.entry}>
        <h3 className="heading">Senior Software Engineer @ Tech Corp</h3>
        <p className={parentStyles.date}>Jan 2021 - Present</p>
        <ul>
          <li>Led the development of a new customer-facing dashboard using React, resulting in a 20% increase in user engagement.</li>
          <li>Architected and implemented a scalable GraphQL API to serve data to multiple client applications.</li>
          <li>Mentored junior engineers and established best practices for code reviews and testing.</li>
        </ul>
      </div>
    </section>
  );
}
