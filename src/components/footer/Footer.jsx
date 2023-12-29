import React from 'react';
import styles from '../../components/footer/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Buttom';


function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <Link href={"/info"}  className={styles.v}> <p >Info</p></Link>
        </div><Link href={"/SUPPORT"}  className={styles.v}> <p >Support</p></Link>
    </div>
  );
}
export default Footer;