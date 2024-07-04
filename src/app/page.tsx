"use client"

import Coding from '@/components/home/Coding';
import Introduction from '@/components/home/Introduction';
import Title from '@/components/home/Title';
import commons from '@styles/common.module.css'
import styles from '@styles/home.module.css'
import { Suspense } from 'react';

export default function Home() {
  return (
    <section id={styles.homebox} className={commons.withpageappear}>
      <Title/>
      <Coding/>
      <Introduction/>
    </section>
  );
}
