import styles from '@styles/contactform.module.css'

const Banner = () => {
  return ( 
    <div id={styles.banner_box}>
      <h2 id={styles.banner_title}>Platforms 📲.</h2>
      <p id={styles.banner_content}>
        You can visit my <a id={styles.banner_portfolio_link} href="https://nextjs-portfolio-git-master-jorges-projects-6b24853a.vercel.app/">portfolio</a> in the <i>contact</i> section to see my platforms, or you can send me an email through this form.
      </p>
    </div>
  );
}
 
export default Banner;