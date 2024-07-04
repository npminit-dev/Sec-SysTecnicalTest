import styles from '@styles/interests.module.css'
import InterestDescription from './InterestDescription';

const TechExplorer = () => {
  return ( 
    <article id={styles.techbox} className={styles.interests_article}>
      <InterestDescription title='Tech explorer 🔍' content='
        In addition to development, I spend part of my time reading and watching content creators related to computing and the world of technology. 
        Every day I try to learn something new in this field 💙.
      '/>
    </article>
  );
}
 
export default TechExplorer;