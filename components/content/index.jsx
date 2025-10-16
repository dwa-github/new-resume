import styles from "./content.module.css";
import Education from "./Education/index";
import Experience from "./Experience/index";
import Projects from "./Projects/index";

export default function Content({ className }) {
  // Combine the className from props (for grid layout) with the component's own styles
  const combinedClassName = `${className || ""} ${styles.contentContainer}`;

  return (
    <section className={combinedClassName}>
      {/* The smaller "block" components go here */}
      <Education />
      <Experience />
      <Projects />
    </section>
  );
}
