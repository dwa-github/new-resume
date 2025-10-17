import styles from './Hobbies.module.css';
import {
  Heart,
  Dumbbell,
  BookOpen,
  Headphones,
  Globe,
  Film,
  Code,
  Cpu,
} from 'lucide-react';

const hobbies = [
  { name: 'Sporting', icon: <Dumbbell size={16} className={styles.itemIcon} /> },
  { name: 'Reading', icon: <BookOpen size={16} className={styles.itemIcon} /> },
  { name: 'Music', icon: <Headphones size={16} className={styles.itemIcon} /> },
  { name: 'Movies', icon: <Film size={16} className={styles.itemIcon} /> },
  { name: 'Foreign Policy', icon: <Globe size={16} className={styles.itemIcon} /> },
  { name: 'Programming', icon: <Code size={16} className={styles.itemIcon} /> },
  { name: 'Technology', icon: <Cpu size={16} className={styles.itemIcon} /> },
];

export default function Hobbies() {
  return (
    <section className={styles.hobbiesSection}>
      <h3 className="heading">
        <span className={styles.iconWrapper}>
          <Heart size={20} />
        </span>
        <span>Hobbies & Interests</span>
      </h3>
      <ul className={styles.list}>
        {hobbies.map((hobby) => (
          <li key={hobby.name} className={styles.item}>
            {hobby.icon}
            <span>{hobby.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
