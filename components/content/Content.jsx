import styles from "./content.module.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

export default function Content() {
  return (
    <section className={styles.contentContainer}>
      <Education />
      <Experience />
      <Projects />
    </section>
  );
}
