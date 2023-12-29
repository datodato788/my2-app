import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

function Button({title, url}) {
    return (
        <Link href={url}>
            <button className={styles.buttonn}>{title}</button>

        </Link>
    )
}

export default Button