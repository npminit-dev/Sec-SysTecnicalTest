import styles from '@styles/about.module.css'
import Image from 'next/image';
import { useRef } from 'react';
import { FaCss3Alt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Photo = () => {

  return ( 
    <div id={styles.photo_box}>
      <Image
        id={styles.photo}
        src={'/me.png'}
        height={250}
        width={250}
        alt='Page creator photo'
      ></Image>
      <div id={styles.iconbox}>
        <FaReact className={styles.photo_icon} id={styles.react}/>
        <VscVscode className={styles.photo_icon} id={styles.vscode}/>
        <FaCss3Alt className={styles.photo_icon} id={styles.css}/>
        <FaNodeJs className={styles.photo_icon} id={styles.node}/>
        <FaGithub className={styles.photo_icon} id={styles.github} />
      </div>
    </div>
  );
}
 
export default Photo;