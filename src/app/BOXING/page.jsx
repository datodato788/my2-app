import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import N1 from '../../../public/N1.jpg'
import N2 from '../../../public/N2.jpg'
import N3 from '../../../public/N3.jpg'
import N4 from '../../../public/N4.jpg'
import N5 from '../../../public/N5.jpg'
import Link from "next/link";
function BOXING() {
  return (
    <div className={styles.container}>
      <div>
      <Link href={"/BOXING/S"}> <Image
          src={N1}
          alt='N1'
          className={styles.top} />
        <p className={styles.p}>N1</p>
        <p>Sugar Ray Robinson</p></Link>
      </div>
      <div>
      <Link href={"/BOXING/SS"}><Image
          src={N2}
          alt='N2'
          className={styles.top} />
        <p className={styles.p}>N2</p>
        <p className={styles.fix}>Muhammad Ali</p></Link>
      </div>
      <div>
      <Link href={"/BOXING/SSS"}><Image
          src={N3}
          alt='N3'
          className={styles.top} />
        <p className={styles.p}>N3</p>
        <p>Mike Tyson</p></Link>
      </div>
      <div>
      <Link href={"/BOXING/SSSS"}><Image
          src={N4}
          alt='N4'
          className={styles.top} />
        <p className={styles.p}>N4</p>
        <p>Floyd Mayweather Jr</p></Link>
      </div><div>
      <Link href={"/BOXING/SSSSS"}>  <Image
          src={N5}
          alt='N5'
          className={styles.top} />
        <p className={styles.p}>N5</p>
      <p>Deontay Wilder</p></Link>
      </div>
    </div>


  )
}

export default BOXING