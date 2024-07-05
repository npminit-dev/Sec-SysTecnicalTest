"use client"

import HistoryBuff from '@/components/interests/HistoryBuff';
import MusicLover from '@/components/interests/MusicLover';
import SportEnthusiast from '@/components/interests/SportEnthusiast';
import TechExplorer from '@/components/interests/TechExplorer';
import styles from '@styles/interests.module.css'

const Interests = () => {
  return ( 
    <section id={styles.interests_mainbox}>
      <TechExplorer/>
      <SportEnthusiast/>
      <HistoryBuff/>
      <MusicLover/>
    </section>
  );
}
 
export default Interests;