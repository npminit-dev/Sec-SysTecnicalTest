import styles from '@styles/interests.module.css'
import InterestDescription from './InterestDescription';

const MusicLover = () => {
  return ( 
    <article id={styles.musicbox} className={styles.interests_article}>
      <InterestDescription title='Music lover 🎷' content='
        I like to listen to music, especially pop and rock although I like all genres. 
        I used to play the drums although that was a long time ago 😅.
      '/>
    </article>
  );
}
 
export default MusicLover;