import styles from "./page.module.css";
import Image from 'next/image'
import mike from '../../public/mike.png'
import Button from "@/components/button/Buttom";



export default function home() {
  return (
    <main className={styles.container}>
      <   div className={styles.item}>
        <h1 className={styles.title}>  Best sport?<br/>Best Athlete?
       
        </h1> <Button title={"let's start"} url={"/BOXING"} className={styles.size} />
    
        
     
      </div>                                  
      <div className={styles.item}>
        <Image
          src={mike}
          alt="mike"
          className={styles.img}
          


        />
       
      </div>
    </main>

  );
}
