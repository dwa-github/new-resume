import styles from './sidebar.module.css';
import ProfileImage from './ProfileImage/ProfileImage';
import Properties from './Properties/Properties';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import Hobbies from './Hobbies/Hobbies';

export default function Sidebar() {

  return (
    <aside className={styles.sidebarContainer}>
        <ProfileImage />
        <Properties />
        <Skills />
        <Languages />
        <Hobbies />
    </aside>
  );
}