import styles from './properties.module.css';
import { Sparkles, ChevronRight } from 'lucide-react';

const properties = [
  'Problem-Solver',
  'Team Player',
  'Detail-Oriented',
  'Creative Thinker', 
  'Self-Motivated'
];

export default function Properties() {
  return (
    <section className={styles.propertiesSection}>
      <h3 className="heading">
        <span className={styles.iconWrapper}>
          <Sparkles size={20} />
        </span>
        <span>Properties</span>
      </h3>
      <ul className={styles.list}>
        {properties.map((prop) =>
          <li key={prop} className={styles.item}>
            <ChevronRight size={16} className={styles.itemIcon} />
            <span>{prop}</span>
          </li>
        )}
      </ul>
    </section>
  );
}
