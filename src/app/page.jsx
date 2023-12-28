import styles from "./page.module.css";
import Image from 'next/image'
import Bbb from '../../public/Bbb.png'

export default function home() {
  return (
    <main className={styles.container}>
      <   div className={styles.item}>
        <h1 className={styles.title}>  Best sport?<br/>Best fighter?
       
        </h1>
    
        
     
      </div>                                  
      <div className={styles.item}>
        <Image
          src={Bbb}
          alt="Bbb"
          className={styles.img}


        />
      </div>
    </main>

  );
}
