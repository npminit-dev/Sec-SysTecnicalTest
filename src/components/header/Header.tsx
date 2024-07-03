"use client"

import styles from '@styles/header.module.css'
import Links from './Links';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';
import Avatar from './Avatar';

const Header = () => {

  const [open, setOpen] = useState<boolean>(false)
  const toggleOpen = () => setOpen(!open)
  
  return ( 
    <>
      <header id={styles.header}>
        <nav id={styles.link_container}>
          <Links></Links>
        </nav>
        <BurgerMenu
          open={open}
          handleShowMenu={toggleOpen}
        ></BurgerMenu>
        <Avatar></Avatar>
      </header>
      { open && <div id={styles.burger_closeshadow} onClick={toggleOpen}></div> }
    </>
  );
}
 
export default Header;