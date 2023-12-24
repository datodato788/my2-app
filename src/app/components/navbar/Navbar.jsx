import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.container}>
    <div><Link href="/">
      HOME
      </Link></div>

    </div>

  )
}

export default Navbar