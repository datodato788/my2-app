import Image from 'next/image'
import styles from './page.module.css'
import Sss from '../../public/sss.png'
import Button from './components/button/Buttom'


export default function Home() {
  return (
    <main className={styles.container}>
    <div className={styles.Atxt}>
      <h1 className={styles.txt}>
        Best sport?<br/>
       Best fighter?</h1>
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