import styles from './header.module.scss'
import { useEffect, useState } from "react";
import { useTranslation } from '../services/useTranslation';
import Regulator from './regulator';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDarkMode } from '../services/useDarkmode';
import DarkMode from './darkmode';
const Header = () => {
    const [burgerOpen, setburgerOpen] = useState(false);
    const { t, lang, setLang } = useTranslation("de");
    const { darkMode, setDarkMode } = useDarkMode();
    const [settingOpen, setsettingOpen] = useState();


    const handleMobilSettings = () => {
        setsettingOpen(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleMobilSettings);

        return () => {
            window.removeEventListener('scroll', handleMobilSettings)
        }
    }, []);

    return (


        <section className={`${styles.headerSection} ${burgerOpen && window.innerWidth < 580 ? styles.whiteHeader : ''} `}>
            <div className={`${styles.content} screenPadding`}>
                <div className={styles.logo}>
                    <a href="/"><img src="./logo/favicon.svg" alt="" /></a>
                </div>
                <nav>

                    <HashLink smooth to="/#aboutme">{t('header.aboutme')}</HashLink>
                    <HashLink smooth to="/#stack">{t('header.stack')}</HashLink>
                    <HashLink smooth to="/#skills">{t('header.skills')}</HashLink>
                    <HashLink smooth to="/#resume">{t('header.resume')}</HashLink>
                    <HashLink smooth to="/#projects">{t('header.projects')}</HashLink>
                    <HashLink smooth to="/#contact">{t('header.contact')}</HashLink>
                    <div className={styles.settingsBtn}>
                        {darkMode ? (
                            <img onClick={() => setsettingOpen(!settingOpen)} src="./icons/settings_grey.svg" alt="" />
                        ) : (
                            <img onClick={() => setsettingOpen(!settingOpen)} src="./icons/settings_blue.svg" alt="" />
                        )}
                    </div>

                </nav>

                <div className={styles.respContainer}>
                    <div className={styles.respContact}>
                        <a href="tel:015141292919"><img src="./icons/phone_blue.svg" alt="" /></a>
                        <a href="mailto:kontakt@johannes-roth.de"><img src="./icons/mail_blue.svg" alt="" /></a>
                    </div>
                    <div className={styles.divider}></div>
                    <div onClick={() => setburgerOpen(!burgerOpen)} className={`${styles.burger} ${burgerOpen ? styles.transformBurger : styles.resetBurger} `}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>




            </div>


            <div className={`${styles.respMenu} ${burgerOpen ? styles.slide : ''} `} onClick={() => setburgerOpen(false)}>
                <div>

                    <HashLink smooth to="/#aboutme">{t('header.aboutme')}</HashLink>
                    <HashLink smooth to="/#stack">{t('header.stack')}</HashLink>
                    <HashLink smooth to="/#skills">{t('header.skills')}</HashLink>
                    <HashLink smooth to="/#resume">{t('header.resume')}</HashLink>
                    <HashLink smooth to="/#projects">{t('header.projects')}</HashLink>
                    <HashLink smooth to="/#contact">{t('header.contact')}</HashLink>
                    <Regulator />
                    <DarkMode />
                </div>

            </div>

            <div onMouseLeave={() => { setsettingOpen(false) }} className={`${styles.settingsContainer} ${settingOpen ? styles.slideSettings : ''}`}>
                <Regulator />
                <DarkMode />
            </div>



        </section>
    );

}

export default Header