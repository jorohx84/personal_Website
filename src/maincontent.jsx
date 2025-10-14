import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import styles from './main.module.scss';
import Hero from "./hero/hero";
import Aboutme from "./aboutme/aboutme";
import Projects from "./projects/projects";
import Testimonials from "./testimonials/testimonials";
import Contact from "./contact/contact";
import Sidebar from "./sidebar";
import Stack from "./stack/stack";
import Skills from "./skills/skills";
import Resume from "./resume/resume";
import { useDarkMode } from "./services/useDarkmode";
const Main = () => {
    const { darkMode } = useDarkMode();
    useEffect(() => {
        console.log(darkMode);
        const root = document.documentElement;
        console.log(darkMode);

        if (darkMode) {
            root.classList.add("dark-theme");
        } else {
            root.classList.remove("dark-theme");
        }

    }, [darkMode]);

    return (
        <section className={`${styles.mainSection} screenPadding`}>
            <Hero />
            <Aboutme />
            <Stack />
            <Skills />
            <Resume />
            <Projects />
            <Testimonials />
            <Contact />
            {/* <Sidebar /> */}
        </section>

    );
}
export default Main