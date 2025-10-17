import styles from './summary.module.css';
import { User } from 'lucide-react';
import contentStyles from '../../content/content.module.css';

export default function Summary({ className }) {
  const combinedClassName = `${className || ''} ${styles.summaryContainer}`;

  return (
    <div className={combinedClassName}>
      <h1 className="title">Your Name</h1>
      <h2 className={`subtitle ${styles.titleWithIcon}`}>
        <span className={contentStyles.iconWrapper}>
          <User size={28} />
        </span>
        <span>About Me</span>
      </h2>
      <p className={styles.summary}>
        A passionate and creative full-stack developer with a knack for building
        elegant, efficient, and scalable web applications.
      </p>
    </div>
  );
}
