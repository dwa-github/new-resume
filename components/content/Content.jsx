import styles from "./content.module.css";
import Summary from "../header/Summary/Summary";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

export default function Content({ className }) {
  return (
    <section className={className}>
      <header className={styles.contentHeader}>
        <Summary />
      </header>
      <div className={styles.contentBody}>
        <Education />
        <Experience />
        <Projects />
      </div>
    </section>
  );
}
