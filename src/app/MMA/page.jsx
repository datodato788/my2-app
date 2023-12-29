import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import NN1 from '../../../public/NN1.jpg'
import NN2 from '../../../public/NN2.jpg'
import NN3 from '../../../public/NN3.jpg'
import NN4 from '../../../public/NN4.jpg'
import NN5 from '../../../public/NN5.jpg'

function MMA() {
  return (
      
    <div className={styles.container}>
    <div>
      <Image
        src={NN1}
        alt='NN1'
        className={styles.top} />
      <p className={styles.p}>N1</p>
      <Link href={"/"}><p></p></Link>
    </div>
    <div>
      <Image
        src={NN2}
        alt='NN2'
        className={styles.top} />
      <p className={styles.p}>N2</p>
      <Link href={"/"}><p className={styles.fix}></p></Link>
    </div>
    <div>
      <Image
        src={NN3}
        alt='NN3'
        className={styles.top} />
      <p className={styles.p}>N3</p>
      <Link href={"/"}><p>Mike Tyson</p></Link>
    </div>
    <div>
      <Image
        src={NN4}
        alt='NN4'
        className={styles.top} />
      <p className={styles.p}>N4</p>
      <Link href={"/"}><p>Floyd Mayweather Jr</p></Link>
    </div><div>
      <Image
        src={NN5}
        alt='NN5'
        className={styles.top} />
      <p className={styles.p}>N5</p>
      <Link href={"/"}><p>Deontay Wilder</p></Link>
    </div>   
  </div>

  )
}

export default MMA