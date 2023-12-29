import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
import NN1 from '../../../public/NN1.jpg'
import NN2 from '../../../public/NN2.jpg'
import NN3 from '../../../public/NN3.jpg'
import NN4 from '../../../public/NN4.png'
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
      <Link href={"/MMA/W"}><p>Khabib Nurmagomedov</p></Link>
    </div>
    <div>
      <Image
        src={NN2}
        alt='NN2'
        className={styles.top} />
      <p className={styles.p}>N2</p>
      <Link href={"/MMA/WW"}><p className={styles.fix}>Georges Saint-Pierre</p></Link>
    </div>
    <div>
      <Image
        src={NN3}
        alt='NN3'
        className={styles.top} />
      <p className={styles.p}>N3</p>
      <Link href={"/MMA/WWW"}><p>Jon Jones</p></Link>
    </div>
    <div>
      <Image
        src={NN4}
        alt='NN4'
        className={styles.top} />
      <p className={styles.p}>N4</p>
      <Link href={"/MMA/WWWW"}><p>Anderson Silva</p></Link>
    </div><div>
      <Image
        src={NN5}
        alt='NN5'
        className={styles.top} />
      <p className={styles.p}>N5</p>
      <Link href={"/MMA/WWWWW"}><p>Fedor Emelianenko</p></Link>
    </div>   
  </div>

  )
}

export default MMA