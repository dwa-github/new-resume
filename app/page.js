import styles from "./page.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Content from "../components/content/Content";

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      <div className={styles.sidebarArea}>
        <Sidebar />
      </div>
      {/* The main column that holds both Header and Content */}
      <div className={styles.mainColumn}>
        <Header />
        <Content />
      </div>
    </main>
  );
}
