"use client";

import React, { useContext, useState } from "react";
import styles from "./colorMode.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function ColorModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}></div>
      <div className={styles.icon}></div>   
      <div
        className={styles.ball}
        style={mode === "DarkAndYellow" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}

export default ColorModeToggle;