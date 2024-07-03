import styles from '@styles/header.module.css'
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import Links from './Links';
import { BurgerMenuProps } from '../../../typedefs/header';

const BurgerMenu = ({ open, handleShowMenu }: BurgerMenuProps) => {

  return (
    <>
      <div id={styles.burger_iconbox} onClick={handleShowMenu}>
      {
        !open ?
        <RxHamburgerMenu className={styles.burger_icon} /> :
        <IoMdClose className={styles.burger_icon} />
      }
      </div>
      {
        open && 
        <div id={styles.burger_menubox}>
          <Links handleShowMenu={handleShowMenu}></Links>
        </div> 
      }
    </>
  );
}

export default BurgerMenu;