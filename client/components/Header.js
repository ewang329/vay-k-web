import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import styles from '../styles/Header.module.css'

export default function  Header(props) {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className={styles.header}>
            <a href="/" className={styles.logoContainer}>
                <img id={styles.logo} src="/logo.png"/>
                <span id={styles.logoBrand}>Vay-K</span>
            </a>
            <h3 id={styles.title}>{props.title}</h3>
            <div>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color="white"
                />
                {isOpen ? (
                    <ul className={styles.navDropdown}>
                    <li><a href="/trips">Trips</a></li>
                    <li><a>Account Info</a></li>
                    <li><a>Log out</a></li>
                    </ul>
                ) : null}
            </div>
        </header>
    )
}