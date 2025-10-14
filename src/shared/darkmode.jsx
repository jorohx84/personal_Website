import React from "react";
import styles from './darkmode.module.scss';
import { useDarkMode } from "../services/useDarkmode";


const DarkMode = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (

        <div className={styles.modeChangeContainer}>
            <div onClick={(e) => { e.stopPropagation(); setDarkMode(false) }} className={`${styles.modeDot} ${styles.light}`}></div>
            <div className={styles.regulator}>
                <div className={darkMode ? styles.moveRight : ''}></div>
            </div>
            <div onClick={(e) => { e.stopPropagation(); setDarkMode(true) }} className={`${styles.modeDot} ${styles.dark}`}></div>
        </div>

    )
}
export default DarkMode