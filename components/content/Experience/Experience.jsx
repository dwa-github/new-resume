import styles from './Experience.module.css';
import { Briefcase, ChevronRight } from 'lucide-react';

const experienceData = [
  {
    company: "Tech Corp",
    roles: [
      {
        position: "Senior Software Engineer",
        startDate: "2021",
        endDate: "Present",
        description: "As a senior engineer, I took ownership of the full development lifecycle, from architectural design to deployment, focusing on creating robust and scalable solutions.",
        responsibilities: [
          "Led the development of a new customer-facing dashboard using React, resulting in a 20% increase in user engagement.",
          "Architected and implemented a scalable GraphQL API to serve data to multiple client applications.",
        ],
      },
    ],
  },
  {
    company: "Web Solutions",
    roles: [
      {
        position: "Frontend Developer",
        startDate: "2019",
        endDate: "2021",
        description: "In this role, I focused on building and maintaining the user-facing parts of web applications, ensuring a seamless and responsive user experience.",
        responsibilities: [
          "Developed responsive web applications using React and Redux.",
          "Collaborated with designers to create user-friendly interfaces.",
        ],
      },
      {
        position: "Junior Frontend Developer",
        startDate: "2018",
        endDate: "2019",
        description: "Started my career by contributing to various web projects, focusing on learning best practices in frontend development and collaborating with senior developers.",
        responsibilities: [
          "Assisted in the development of new features for the company's main web application.",
          "Fixed bugs and improved the performance of existing frontend code.",
        ],
      },
      {
        position: "Software Development Intern",
        startDate: "2017",
        endDate: "2018",
        description: "Gained foundational experience in web development, working closely with the team on various internal tools and learning the basics of the software development lifecycle.",
        responsibilities: [
          "Contributed to the maintenance of internal documentation and websites.",
          "Participated in code reviews and team meetings to understand project workflows.",
        ],
      },
    ],
  },
];

function RoleEntry({ position, startDate, endDate, description, responsibilities }) {
  return (
    <div className={styles.roleEntry}>
      <h4 className="subheading">{position} | <span className={styles.year}>{startDate}</span> - <span className={styles.year}>{endDate}</span></h4>
      <p className="body">{description}</p>
      <ul className={styles.taskList}>
        {responsibilities.map((responsibility) => (
          <li key={responsibility} className={styles.taskItem}>
            <ChevronRight size={16} className={styles.taskIcon} />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyEntry({ company, roles }) {
  return (
    <article className={styles.experienceEntry}>
      <h3 className="heading">{company}</h3>
      {roles.map((role) => (
        <RoleEntry key={role.position} {...role} />
      ))}
    </article>
  );
}

export default function Experience() {
  return (
    <section className={styles.contentSection}>
      <h2 className="subtitle">
        <span className={styles.iconWrapper}>
          <Briefcase size={22} />
        </span>
        <span>Experience</span>
      </h2>
      {experienceData.map((job) => (
        <CompanyEntry key={job.company} {...job} />
      ))}
    </section>
  );
}
