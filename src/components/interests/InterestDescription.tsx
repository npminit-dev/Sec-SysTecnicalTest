import { InterestsDescriptionProps } from "../../../typedefs/interests";
import styles from '@styles/interests.module.css'
import { Nunito } from "next/font/google";
const nun = Nunito({ subsets: ['latin-ext'] })

const InterestDescription = ({ title, content }: InterestsDescriptionProps) => {
  return ( 
    <div className={`${styles.interest_box} ${nun.className}`}>
      <h2 className={styles.interest_title}>{ title }</h2>
      <p className={styles.interest_content}>
      { content } 
      </p>
    </div>
  );
}
 
export default InterestDescription;