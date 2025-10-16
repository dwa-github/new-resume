import styles from './contactInfo.module.css';
import parentStyles from '../sidebar.module.css';

export default function ContactInfo() {
  return (
    <div className={parentStyles.section}>
      <h3 className="heading">Contact</h3>
      <ul className={parentStyles.contactList}>
        <li><a href="mailto:hello@example.com">hello@example.com</a></li>
        <li><a href="tel:+1234567890">(123) 456-7890</a></li>
        <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">your-website.com</a></li>
        <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li>San Francisco, CA</li>
      </ul>
    </div>
  );
}
