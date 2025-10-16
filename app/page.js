import styles from "./page.module.css";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import AvatarImage from "../components/header/AvatarImage";
import Summary from "../components/header/Summary";

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      {/* Top-left quadrant */}
      <AvatarImage className={styles.avatarArea} />
      {/* Top-right quadrant */}
      <Summary className={styles.summaryArea} />
      {/* Bottom-left quadrant */}
      <Sidebar className={styles.sidebarArea} />
      {/* Bottom-right quadrant */}
      <Content className={styles.contentArea} />
    </main>
  );
}
