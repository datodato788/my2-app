import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import ColorModeToggle from '../colorModeToggle/ColorModeToggle';

function Navbar() {
  
  
    const link = [
      {
        id: 1,
        title: "Home",
        url: "/",
      },
      {
        id: 2,
        title: "Boxing",
        url: "/BOXING",
      },
      {
        id: 3,
        title: "MMA",
        url: "/MMA",
      },
      {
        id: 4,
        title: "Football",
        url: "/FOOTball",
      },
     
    ];

    return (

      
    <div className={styles.container}>
      <Link href="/" className={styles.sss}> 
      List of The Best Athletes
      </Link>
      <div className={styles.Links}>
      
       {link.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}<ColorModeToggle/>
    

    </div>
    </div>
  )
}

export default Navbar