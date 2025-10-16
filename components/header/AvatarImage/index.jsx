import Image from 'next/image';
import styles from './avatarImage.module.css';

export default function AvatarImage({ className }) {
  const combinedClassName = `${className || ''} ${styles.avatarWrapper}`;

  return (
    <div className={combinedClassName}>
      <Image
        src="/images/profile-photo.jpg"
        alt="Your Name"
        width={280}
        height={280}
        className={styles.avatar}
        priority
      />
      <h1 className="title">Your Name</h1>
    </div>
  );
}
