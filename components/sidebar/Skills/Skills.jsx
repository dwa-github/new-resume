import styles from './skills.module.css';
import { Wrench, ChevronRight } from 'lucide-react';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h3 className="heading">
        <span className={styles.iconWrapper}>
          <Wrench size={20} />
        </span>
        <span>Skills</span>
      </h3>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.item}>
            <ChevronRight size={16} className={styles.itemIcon} />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}