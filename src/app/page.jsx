import Image from 'next/image'
import styles from './page.module.css'
import Sss from '../../public/sss.png'


export default function Home() {
  return (
    <main className={styles.container}>
    <div className={styles.Atxt}>
      <h1 className={styles.txt}>
        Best sport?<br/>
       best fighter?</h1>
      <div className={styles.image}>
     <Image 
     src={Sss}
     alt='Sss'
     className={styles.img}
     />
  
      </div>
      </div>
  </main>
  )
}