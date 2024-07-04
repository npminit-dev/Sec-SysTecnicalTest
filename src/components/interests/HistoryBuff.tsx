import styles from '@styles/interests.module.css'
import InterestDescription from './InterestDescription';

const HistoryBuff = () => {
  return ( 
    <article id={styles.historybox} className={styles.interests_article}>
      <InterestDescription title='History buffs 📜' content='
        I like to read about historical events and important battles ⚔️.  I usually listen to podcasts about true stories from soldiers on the front 🗡️.
      '/>
    </article>
  );
}
 
export default HistoryBuff;