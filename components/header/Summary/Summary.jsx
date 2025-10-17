import styles from './summary.module.css';
import { User } from 'lucide-react';

const summaryParagraphs = [
  `My strength lies in quickly identifying and solving technical problems. As an analytical and proactive IT professional, I enjoy diving into challenges to get to the core and take the right steps for an effective solution. I believe that technology only truly works when it supports the user. That's why my approach is always customer-oriented, with the goal of improving processes and genuinely helping people move forward.`,
  `For over ten years, I have been developing myself within the IT field. My journey began with a hands-on technical foundation as a technician, where I developed a deep understanding of hardware and systems. In my later roles in support and coordination, I learned to work in a structured manner according to ITIL principles and SLAs, always prioritizing customer satisfaction. By supplementing this with diplomas in both system administration and software development, I have broadened my expertise to become a well-rounded IT professional.`,
  `I am the link between the user and the technology. My broad background enables me to tackle a wide range of IT challenges. Whether it's developing a new web application, managing existing systems, or providing technical support, I ensure that the technology seamlessly aligns with the user's needs. My contribution, whether independent or in a team, is focused on increasing efficiency and effectiveness to achieve business goals.`
];

export default function Summary() {
  return (
    <div className={styles.summaryContainer}>
      <h2 className="subtitle">
        <span className={styles.iconWrapper}>
          <User size={20} />
        </span>
        <span>About Me</span>
      </h2>
      <div className={styles.summaryContent}>
        {summaryParagraphs.map((paragraph, index) => (
          <p key={index} className="body">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
