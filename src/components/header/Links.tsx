import Link from "next/link";
import styles from '@styles/header.module.css'
import { LinksProps } from "../../../typedefs/header";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Links = ({ handleShowMenu }: LinksProps) => {
  return (
    <>
      <span className={styles.link}>
        <Link onClick={handleShowMenu} href={'/aboutme'}>ABOUT ME</Link>
      </span>
      <VscDebugBreakpointLog className={styles.point_divider}/>
      <span className={styles.link}>
        <Link onClick={handleShowMenu} href={'/interests'}>INTERESTS</Link>
      </span>
      <VscDebugBreakpointLog className={styles.point_divider}/>
      <span className={styles.link}>
        <Link onClick={handleShowMenu} href={'/contactform'}>CONTACT</Link>
      </span>
    </>
  );
}

export default Links;