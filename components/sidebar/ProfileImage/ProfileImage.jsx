import Image from 'next/image';
import styles from './ProfileImage.module.css';

export default function ProfileImage({ className }) {
  const combinedClassName = `${className || ''} ${styles.profileImageWrapper}`;

  return (
    <div className={combinedClassName}>
      <Image
        src="/images/profile-photo.jpg"
        alt="Your Name"
        width={280}
        height={280}
        className={styles.profileImage}
        priority
      />
    </div>
  );
}
