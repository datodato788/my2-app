import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import NNN1 from '../../../public/NNN1.jpg'
import NNN2 from '../../../public/NNN2.jpg'
import NNN3 from '../../../public/NNN3.jpg'
import NNN4 from '../../../public/NNN4.jpg'
import NNN5 from '../../../public/NNN5.jpg'
import Link from 'next/link'

function FOOTball() {
  return (
    <div className={styles.container}>
    <div>
      <Image
        src={NNN1}
        alt='NNN1'
        className={styles.top} />
      <p className={styles.p}>N1</p>
      <Link href={"/"}><p>Cristiano Ronaldo</p></Link>
    </div>
    <div>
      <Image
        src={NNN2}
        alt='NNN2'
        className={styles.top} />
      <p className={styles.p}>N2</p>
      <Link href={"/"}><p className={styles.fix}>Lionel Messi</p></Link>
    </div>
    <div>
      <Image
        src={NNN3}
        alt='NNN3'
        className={styles.top} />
      <p className={styles.p}>N3</p>
      <Link href={"/"}><p>Karim Benzema</p></Link>
    </div>
    <div>
      <Image
        src={NNN4}
        alt='NNN4'
        className={styles.top} />
      <p className={styles.p}>N4</p>
      <Link href={"/"}><p>Neymar</p></Link>
    </div><div>
      <Image
        src={NNN5}
        alt='NNN5'
        className={styles.top} />
      <p className={styles.p}>N5</p>
      <Link href={"/"}><p>Khvicha Kvaratskhelia</p></Link>
    </div>   
  </div>
  )
}

export default FOOTball