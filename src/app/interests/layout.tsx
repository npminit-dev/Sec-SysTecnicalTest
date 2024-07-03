"use client"

import { PropsWithChildren } from "react";
import styles from '@styles/common.module.css'

const InterestsLayout = ({ children }: PropsWithChildren) => {
  return ( 
    <div className={styles.withpageappear}>
      INTERESTS LAYOUT
      { children }
    </div>
  );
}
 
export default InterestsLayout;