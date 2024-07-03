"use client"

import styles from '@styles/common.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.withpageappear}>
      hello world
      <Link href={'/aboutme'} style={{ display: 'block' }}>ABOUT</Link>
      <Link href={'/contactform'} style={{ display: 'block' }}>CONTACT</Link>
      <Link href={'/interests'} style={{ display: 'block' }}>INTERESTS</Link>
    </main>
  );
}
