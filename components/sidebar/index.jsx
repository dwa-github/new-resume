import styles from './sidebar.module.css';
import ContactInfo from './ContactInfo/index';
import Skills from './Skills/index';

export default function Sidebar({ className }) {
  // Combine the className from props (for grid layout) with the component's own styles
  const combinedClassName = `${className || ''} ${styles.sidebarContainer}`;

  return (
    <aside className={combinedClassName}>
      <ContactInfo />
      <div className={styles.divider}></div>
      <Skills />
    </aside>
  );
}
