import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/button/Buttom'
import support from '../../../public/210325-03-24-7-Support-HD-1.gif'
function SUPPORT() {
    return (
        <div><div>
            <h1 className={styles.title}>contact support</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src={"/210325-03-24-7-Support-HD-1.gif"}
                        alt="contact image"
                        fill={true}
                        className={styles.image}
                    />                </div>
                <from className={styles.from}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea className={styles.textArea}
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button title={"send"} url={"/"} />
                </from>
            </div>
        </div></div>
    )
}

export default SUPPORT