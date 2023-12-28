import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import N1 from '../../../public/N1.jpg'


import N3 from '../../../public/N3.jpg'
import N4 from '../../../public/N4.jpg'
import N5 from '../../../public/N5.jpg'
function BOXING() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={N1}
          alt='N1'
          className={styles.top} />
        <p className={styles.p}>N1</p>
        <p>Sugar Ray Robinson</p>
      </div>
      <div>
        <Image
          src={N2}
          alt='N2'
          className={styles.top} />
        <p className={styles.p}>N2</p>
        <p>Muhammad Ali</p>
      </div>
      <div>
        <Image
          src={N3}
          alt='N3'
          className={styles.top} />
        <p className={styles.p}>N3</p>
        <p>Mike Tyson</p>
      </div>
      <div>
        <Image
          src={N4}
          alt='N4'
          className={styles.top} />
        <p className={styles.p}>N4</p>
        <p>Gervonta Davis</p>
      </div><div>
        <Image
          src={N5}
          alt='N5'
          className={styles.top} />
        <p className={styles.p}>N5</p>
        <p>Deontay Wilder</p>
      </div>
    </div>


  )
}

export default BOXING