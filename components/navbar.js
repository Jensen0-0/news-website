import styles from '../styles/Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../assets/branding/logo.png"
import { sleep } from '../utils/index'
import { useState, useEffect, useRef } from 'react'

function openNav() {
    const content = document.getElementById("content")
    const navbar = document.getElementById("navbar")
    navbar.style.display = "block";

    if (window.innerWidth > 800) {
        content.style.marginLeft = "20rem"
        content.style.width = "calc(100vw - 20rem)"

    } else {
        content.style.marginLeft = "0"
        content.style.marginRight = "0"
        content.style.width = "100vw"
    }


    sleep(200).then(() => {
        navbar.style.height = "100vh";
    })


}
function closeNav() {
    const content = document.getElementById("content");
    const navbar = document.getElementById("navbar");
    navbar.style.height = "0";



    sleep(200).then(() => {
        if (window.innerWidth > 800) {
            content.style.marginLeft = "calc(20rem/2)"
            content.style.marginRight = "calc(20rem/2)"
        }
        navbar.style.display = "none";
    })
}
function shouldClose() {
    if (window.innerWidth < 800) {
        closeNav();
    }
}


const Navbar = ({ children }) => {
    return (<>
        <div
            className={styles.container} >
            <div className={styles.openNavContainer}>
                <button className={styles.openNavBtn} onClick={openNav}>
                    <div className={styles.openNavLogoContainer}>
                        <Image className={styles.openNavLogo} src={Logo} layout="responsive" alt='Zuidermeer' />
                    </div>

                </button>
            </div>

            <nav className={styles.nav} >

                <ul id="navbar">

                    <li onClick={shouldClose}>

                        <Link href={"/"} >
                            <a className={styles.logoLink}>
                                <div className={styles.logoContainer}>
                                    <Image className={styles.logo} width="200px"
                                        height="200px" src={Logo} layout="responsive" alt='Zuidermeer' />
                                </div>
                            </a>
                        </Link>

                    </li>


                    <hr></hr>
                    <li onClick={shouldClose}><Link href={"/"}><a className={styles.navLink}>Home</a></Link></li>
                    <li onClick={shouldClose}><Link href={"/geschiedenis"}><a className={styles.navLink}>Geschiedenis</a></Link></li>
                    <li onClick={shouldClose}><Link href={"/contact"}><a className={styles.navLink}>Contact</a></Link></li>
                    <li onClick={shouldClose}><Link href={"/info"}><a className={styles.navLink}>Info</a></Link></li>
                    <button className={styles.closeNavBtn} onClick={closeNav}>
                        X
                    </button>
                </ul>

            </nav >
        </div >
        <div className={styles.content} id='content'>
            {children}
        </div>

    </>
    )
}

export default Navbar;