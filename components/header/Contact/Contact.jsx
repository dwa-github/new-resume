import styles from './contact.module.css';
import { Mail, Phone, Briefcase, GitBranch, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail size={20} />,
    text: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: <Phone size={20} />,
    text: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: <Briefcase size={20} />,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yourprofile',
  },
  {
    icon: <GitBranch size={20} />,
    text: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  {
    icon: <MapPin size={20} />,
    text: 'City, Country',
    href: '#', // Or a link to a map
  },
];

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      {contactItems.map((item) => (
        <a key={item.text} href={item.href} className={styles.contactItem} target="_blank" rel="noopener noreferrer" >
          <span className={styles.icon}>{item.icon}</span>
          <span className="label">{item.text}</span>
        </a>
      ))}
    </div>
  );
}
