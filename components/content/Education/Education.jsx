import styles from './Education.module.css';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className={styles.contentSection}>
      <h2 className="subtitle">
        <span className={styles.iconWrapper}>
          <GraduationCap />
        </span>
        <span>Education</span>
      </h2>
      <div className={`${styles.entry} ${styles.educationEntry}`}>
        <h3 className="heading">B.S. in Computer Science</h3>
        <h4 className="subheading">University of Technology | <span className={styles.year}>2025</span></h4>
        <p className="body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat similique nostrum ipsam natus doloremque magni, animi quidem illum dolore dolorum! Eaque quidem nihil atque praesentium aliquid cum officiis sed vero soluta, quis ducimus reiciendis minus, est asperiores perferendis esse odio veritatis magnam pariatur assumenda. Non omnis, incidunt unde aperiam excepturi beatae similique illo accusantium, esse qui, neque quos dicta explicabo!</p>
      </div>
      <div className={`${styles.entry} ${styles.educationEntry}`}>
        <h3 className="heading">B.S. in Computer Science</h3>
        <h4 className="subheading">University of Technology | <span className={styles.year}>2017</span> - <span className={styles.year}>2020</span></h4>
        <p className="body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat similique nostrum ipsam natus doloremque magni, animi quidem illum dolore dolorum! Eaque quidem nihil atque praesentium aliquid cum officiis sed vero soluta, quis ducimus reiciendis minus, est asperiores perferendis esse odio veritatis magnam pariatur assumenda. Non omnis, incidunt unde aperiam excepturi beatae similique illo accusantium, esse qui, neque quos dicta explicabo!</p>
      </div>
       <div className={`${styles.entry} ${styles.educationEntry}`}>
        <h3 className="heading">B.S. in Computer Science</h3>
        <h4 className="subheading">University of Technology | <span className={styles.year}>2015</span> - <span className={styles.year}>2017</span></h4>
        <p className="body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat similique nostrum ipsam natus doloremque magni, animi quidem illum dolore dolorum! Eaque quidem nihil atque praesentium aliquid cum officiis sed vero soluta, quis ducimus reiciendis minus, est asperiores perferendis esse odio veritatis magnam pariatur assumenda. Non omnis, incidunt unde aperiam excepturi beatae similique illo accusantium, esse qui, neque quos dicta explicabo!</p>
      </div>
    </section>
  );
}
