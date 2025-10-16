import styles from './skills.module.css';
import parentStyles from '../sidebar.module.css';

const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'GraphQL', 'REST APIs', 'HTML5 & CSS3', 'Sass', 'CSS-in-JS',
  'Webpack', 'Babel', 'Jest', 'React Testing Library', 'CI/CD',
  'Docker', 'PostgreSQL', 'MongoDB'
];

export default function Skills() {
  return (
    <div className={parentStyles.section}>
      <h3 className="heading">Skills</h3>
      <ul className={parentStyles.skillsList}>
        {skills.map(skill => (
          <li key={skill} className={styles.skillItem}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
