import React from "react";
import styles from './linkbox.module.scss';
import { useDarkMode } from "../services/useDarkmode";

const Linkbox = () => {
    const { darkMode } = useDarkMode();
    return (
        <div >
            {!darkMode && (
                <div className={styles.linkBox}>
                    <a href="https://www.linkedin.com/in/johannes-roth-b0833334b" target="_blank"><img src="./icons/linkedin_dark.svg" alt="linkedin" /></a>
                    <a href="https://github.com/jorohx84" target="_blank"><img src="./icons/github_dark.svg" alt="github" /></a>
                    <a href="mailto:kontakt@johannes-roth.de"><img src="./icons/mail_dark.svg" alt="mail" /></a>
                    <a className={styles.phoneIcon} href="tel:015141292919"><img src="./icons/phone_dark.svg" alt="" /></a>

                </div>

            )}

            {darkMode && (
                <div className={styles.linkBox}>
                    <a href="https://www.linkedin.com/in/johannes-roth-b0833334b" target="_blank"><img src="./icons/linkedin_grey.svg" alt="linkedin" /></a>

                    <a href="https://github.com/jorohx84" target="_blank"><img src="./icons/github_grey.svg" alt="github" /></a>

                    <a href="mailto:kontakt@johannes-roth.de"><img src="./icons/mail_grey.svg" alt="mail" /></a>


                    <a className={styles.phoneIcon} href="tel:015141292919"><img src="./icons/phone_grey.svg" alt="" /></a>

                </div>




            )}



        </div>



    );
}
export default Linkbox