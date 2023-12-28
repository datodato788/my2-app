import React from 'react';
import styles from '../footer/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';


function Footer() {
  return (
    <div className={styles.container}>
      <div>MADE BY დათო გოგია</div>
      <div className={styles.socialNetworks}>

        <a href='https://www.facebook.com/'>
          <Image src="/fb.png" width={15} className={styles.Icon} height={15} alt='Facebook' />
        </a>

        <a href='https://www.instagram.com/'>
          <Image src="/ig.png" width={15} className={styles.Icon} height={15} alt='Instagram' />
        </a>

        <a href='https://twitter.com/'>
          <Image src="/x.png" width={15} className={styles.Icon} height={15} alt='Twitter' />
        </a>
        <a href='https://www.youtube.com/'>
          <Image src="/yt.png" width={15} className={styles.Icon} height={15} alt='Youtube' />
        </a>



      </div>
    </div>
  );
}
export default Footer;