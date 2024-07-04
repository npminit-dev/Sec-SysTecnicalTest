import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '@styles/home.module.css'

const Coding = () => {
  return ( 
    <div id={styles.coding_box}>
      <DotLottieReact
        src="/coding.lottie"
        loop
        autoplay
        speed={.75}
      />
    </div>
  );
}
 
export default Coding;