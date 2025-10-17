import styles from './languages.module.css';
import { Globe } from 'lucide-react';

const languages = [
  { name: 'Dutch', flag: '🇳🇱' },
  { name: 'Turkish', flag: '🇹🇷' },
  { name: 'English', flag: '🇬🇧' },
];

export default function Languages() {
  return (
    <section className={styles.languagesSection}>
      <h3 className="heading">
        <span className={styles.iconWrapper}>
          <Globe size={20} />
        </span>
        <span>Languages</span>
      </h3>
      <ul className={styles.list}>
        {languages.map((lang) => (
          <li key={lang.name} className={styles.item}>
            <span className={styles.itemIcon}>{lang.flag}</span>
            <span>{lang.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
