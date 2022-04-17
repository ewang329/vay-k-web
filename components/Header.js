import { Spin as Hamburger } from 'hamburger-react'
import React, { useEffect } from 'react';
import { useState } from 'react'
import { signOut } from 'supertokens-auth-react/recipe/emailpassword'

import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

export default function  Header(props) {
    const [isOpen, setOpen] = useState(false);
    const [isHome, setHome] = useState(false);
    const router = useRouter();

    useEffect(() => {
        console.log(router.pathname)
        if (router.pathname === "/") {
            setHome(true) 
        } else {
            setHome(false)
        }
    },[])

    const logout = async () => {
        await signOut();
        router.push('/auth') 
    }   

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
                    <li><a onClick={!isHome ? logout : () => {}}>Auth</a></li>
                    </ul>
                ) : null}
            </div>
        </header>
    )
}
