import styles from '@styles/about.module.css'
import { Nunito } from 'next/font/google';
const nun = Nunito({ subsets: ['latin-ext'] })

const AboutMe = () => {
  return (
    <div id={styles.aboutme_textbox} className={nun.className}>
      <p>
        Hi! I am Jorge Balsamo , a passionate Frontend Developer from Buenos Aires, Argentina 😃. 
        With several years of experience, I specialize in creating dynamic and user-friendly web and mobile applications. 
        My expertise includes <strong>React</strong>, <strong>React Native</strong>, <strong>Expo</strong>, <strong>NextJS</strong>, and <strong>Angular</strong>, 
        as well as UI libraries like <strong>Bootstrap</strong>, <strong>Tailwind</strong>, <strong>Antd</strong>, and <strong>SemanticUI</strong>.
      </p>
      <p>
        I have strong skills in <strong>JavaScript</strong> and <strong>TypeScript</strong>, and I excel at using <strong>Redux Toolkit</strong> for state management and <strong>React-Router-Dom</strong> for efficient routing. 
        I ensure high-quality code through regular testing with Jest and Cypress 🧪.
      </p>
      <p>
        Since 2021, I have been dedicated to building responsive and high-performance applications, 
        always staying updated with the latest frontend technologies. My backend knowledge in <strong>NodeJS</strong> and Express, 
        along with databases like <strong>MySQL</strong>, <strong>Postgres</strong>, and <strong>MongoDB Atlas</strong>, complements my frontend skills, allowing me to handle full-stack projects effectively 💪🏻.
      </p>
      <p>
        Outside of my professional work, I am a part-time pizza maker 🍕, football enthusiast ⚽, and music lover 🎸. I also enjoy exploring World War II history and engaging in philosophical discussions ⚔️. 
        I am eager to expand my skills in CI/CD, <strong>Docker</strong>, <strong>Kubernetes</strong>, and cloud services like <strong>AWS</strong> and <strong>Google Cloud</strong>.
      </p>
      <p>
        And... that's all 😂, I hope we can work soon! 🚀
      </p>
    </div>
  );
}

export default AboutMe;