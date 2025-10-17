import styles from "./page.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      <Sidebar className={styles.sidebarArea} />
      <Content className={styles.contentArea} />
    </main>
  );
}
