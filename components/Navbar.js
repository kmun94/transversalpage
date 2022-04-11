import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

import Image from "next/image";
import { ImFileText2, ImPlay2 } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <Image src="/logo.png" width={95} height={95} />
          </a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/documentation">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                <ImFileText2 /> Documentation
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                {" "}
                <ImPlay2 /> Demo
              </a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
