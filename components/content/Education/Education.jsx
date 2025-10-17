import styles from './Education.module.css'; // Ensure correct import path
import parentStyles from '../content.module.css';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className={parentStyles.contentSection}>
      <h2 className="subtitle">
        <span className={parentStyles.iconWrapper}>
          <GraduationCap />
        </span>
        <span>Education</span>
      </h2>
      <div className={`${parentStyles.entry} ${styles.educationEntry}`}>
        <h3 className="heading">B.S. in Computer Science</h3>
        <p className={parentStyles.date}>University of Technology, 2017 - 2020</p>
      </div>
    </section>
  );
}
