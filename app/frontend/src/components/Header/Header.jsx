import React from "react";
import styles from './Header.module.css'
import heartlab from './logoHeartLab.svg'
import bxMenu from './bxMenu.svg'
import bxX from './bxX.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <img src={heartlab} alt="Heartlab Icon" />
                HEartLab - Heart Laboratory
            </a>

            <input type="checkbox" className={styles.check} id="check" />
            <label htmlFor="check" className={styles.icons}>
                <img src={bxMenu} alt="Menu Icon" className={styles.menu_icon} />
                <img src={bxX} alt="Menu Close" className={styles.close_icon} />
            </label>

            <nav className={styles.navbar}>
                <a href="/" style={{ "--i": 0 }} >Home</a>
                <a href="/" style={{ "--i": 1 }}>Research</a>
                <a href="/" style={{ "--i": 2 }}>Publications</a>
                <a href="/" style={{ "--i": 3 }}>People</a>
                <a href="/" style={{ "--i": 4 }}>Contact</a>
            </nav>
        </header>
    )
}