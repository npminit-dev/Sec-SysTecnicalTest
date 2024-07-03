"use client"

import { PropsWithChildren } from "react";
import styles from '@styles/common.module.css'

const ContactFormLayout = ({ children }: PropsWithChildren) => {
  return ( 
    <div className={styles.withpageappear}>
      CONTACT FORM LAYOUT
      { children }
    </div>
  );
}
 
export default ContactFormLayout;