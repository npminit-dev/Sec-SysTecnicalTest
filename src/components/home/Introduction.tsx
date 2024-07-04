import { sleep } from '@/utils';
import styles from '@styles/home.module.css'
import { Nunito } from 'next/font/google';
import { useEffect, useRef } from 'react';

const nun = Nunito({ subsets: ['latin-ext'] })

const Introduction = () => {

  const paragraphRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (paragraphRef.current) animateWords(paragraphRef.current.childNodes)
  }, []);

  const animateWords = async (list: NodeListOf<ChildNode>) => {
    await sleep(1000)
    for (let node of list) {
      let isPoint = node.textContent === '.';
      (node as HTMLSpanElement).classList.add(styles.withletterappear)
      isPoint ? await sleep(1000) : await sleep((node.textContent?.length || 0) * 50);
    }
  }

  return (
    <p id={styles.introduction_box} className={nun.className} ref={paragraphRef}>
      <span>Frontend </span>
      <span>Developer </span>
      <span>skilled </span>
      <span>in </span>
      <span>creating </span>
      <span>engaging </span>
      <span>user </span>
      <span>interfaces </span>
      <span>using </span>
      <span id={styles.react}>React </span>
      <span>, </span>
      <span id={styles.next}>Next.js </span>
      <span>and </span>
      <span id={styles.angular}>Angular</span>
      <span>.</span>
      <span> Passionate </span>
      <span>about </span>
      <span>delivering </span>
      <span>high</span>
      <span>-</span>
      <span>quality</span>
      <span>, </span>
      <span>responsive </span>
      <span>web </span>
      <span>applications </span>
      <span>🚀</span>
      <span>.</span>
    </p>
  );
}

export default Introduction;