"use client"

import AboutMe from "@/components/aboutme/AboutMe";
import Photo from "@/components/aboutme/Photo";
import styles from '@styles/about.module.css'

const About = () => {
  return ( 
    <section id={styles.aboutme_mainbox}>
      <Photo/>
      <AboutMe/>
    </section>
  );
}
 
export default About;