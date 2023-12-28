import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'

function Navbar() {
  
    const link = [
      {
        id: 1,
        title: "home",
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
      {
        id: 5,
        title: "info",
        url: "/info",
      },
     
    ];

    return (

      
    <div className={styles.container}>
      <Link href="/" className={styles.sss}> 
      HOME
      </Link>
      <div className={styles.Links}>
       {link.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
    

    </div>
    </div>
  )
}

export default Navbar