"use client"

import { PropsWithChildren } from "react";
import styles from '@styles/common.module.css'

const AboutLayout = ({ children }: PropsWithChildren) => {
  return ( 
    <div className={styles.withpageappear}>
      <div>ABOUT LAYOUT</div>
      { children }
    </div>
  );
}
 
export default AboutLayout;