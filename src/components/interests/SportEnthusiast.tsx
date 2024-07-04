import styles from '@styles/interests.module.css'
import InterestDescription from './InterestDescription';

const SportEnthusiast = () => {
  return ( 
    <article id={styles.sportbox} className={styles.interests_article}>
      <InterestDescription title='Sport enthusiast ⚽' content='
        I enjoy sports, I watch F1 on the weekends 🏎️, I also follow the Argentine soccer team and watch European matches. 
        I like to watch tennis occasionally.
      '/>
    </article>
  );
}
 
export default SportEnthusiast;