import styles from '@styles/header.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Avatar = () => {

  return ( 
    <Link href={'/'}>
      <div id={styles.avatar_mainbox}>
        <h2 id={styles.avatar_title}>JORGE</h2>
        <div id={styles.avatar_box}>
          <Image
            height={40}
            width={40}
            src={'/avatar_icon.webp'}
            alt='Page creator cartoon avatar '
          ></Image>
        </div>
        <div id={styles.avatar_conector}></div>
      </div>
    </Link>
  );
}
 
export default Avatar;