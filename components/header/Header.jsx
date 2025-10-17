import styles from './header.module.css';
import Summary from './Summary/Summary';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Summary />
    </header>
  );
}
