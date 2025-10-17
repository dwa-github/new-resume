import styles from './header.module.css';
import Title from './Title/Title';
import Summary from './Summary/Summary';
import Contact from './Contact/Contact';



export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Title />
      <Summary />
      <Contact />
    </header>
  );
}
