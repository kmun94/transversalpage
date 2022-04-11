import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import styles2 from "../styles/home.module.css";
import Image from 'next/image';
import { ImFileText2, ImPlay2 } from "react-icons/im";



const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // //const [(windowSize, setWindowSize)] = useState(0);

  // const handleClick = () => {
  //   setClick(!click);
  // };

  // const closeMobileMenu = () => {
  //   setClick(false);
  // };

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", showButton);
  // });

  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);


  return (
    <header className={styles2.header}>
        <nav className={styles.navbar}>
            <Link href='/'>
              <a><Image src="/logo.png" width={95} height={95}/></a>
     
            </Link>
        <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
            <li className={styles.navitem}>
               <Link href='/documentation'>
               <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>
                                      <ImFileText2  />   Documentation</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href=''>
                  <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}> <ImPlay2  />   Demo</a>
                </Link>
            </li>
        </ul>
        <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
        </nav>
    </header>
  )
}

//   return (
//     <nav className={styles.navbar}>
//       <div className={`${styles.navbarcontainer} ${styles.container}`}>
//         <Link href="/" className={styles.navbarlogo} onClick={closeMobileMenu}>
//           Logo
//         </Link>
//         <div className={styles.menuicon} onClick={handleClick}>
// 							{click ? <FaTimes /> : <FaBars />}
// 						</div>
//         <ul className={click ? `${styles.navmenu} ${styles.active}` : styles.navmenu}>
//           <li className={styles.navitem}>
//             <Link
//               href="/documentation"
//               className={styles.navlinks}
//               onClick={closeMobileMenu}
//             >
//               <a>Documentation</a>
//             </Link>
//           </li>

//           <li className={styles.navitem}>
//             <Link href="" className={styles.navlinks} onClick={closeMobileMenu}>
//               <a>Demo</a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };



export default Navbar;
