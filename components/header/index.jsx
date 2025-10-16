import styles from './header.module.css';
import AvatarImage from './AvatarImage';
import Summary from './Summary';

export default function Header({ className }) {
  // Combine the className from props (for grid layout) with the component's own styles
  const combinedClassName = `${className || ''} ${styles.headerContainer}`;

  return (
    <header className={combinedClassName}>
      <AvatarImage />
      <Summary />
    </header>
  );
}
