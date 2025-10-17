// Top Navbar for export and language switch
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.brand}>Resume Dashboard</span>
      </div>
      <div className={styles.right}>
        <button className={styles.exportBtn}>Export PDF</button>
        <select className={styles.langSelect} defaultValue="en">
          <option value="en">EN</option>
          <option value="nl">NL</option>
          <option value="tr">TR</option>
        </select>
      </div>
    </nav>
  );
}
