import React, { useEffect } from "react";
import styles from './resume.module.scss';
import Headline from "../shared/headline";
import { useTranslation } from "../services/useTranslation";
const Resume = () => {
    const { t } = useTranslation('de');
    const workstations = t('resume.workstations');
    const educations = t('resume.educations');

    const setLinePositions = () => {
        if (location.pathname.includes('imprint') || location.pathname.includes('privacy')) {
            return
        }
        setPosition('jobline', 'jobdot', 'jobcontainer', 'joblineInner');
        setPosition('eduline', 'edudot', 'educontainer', 'edulineInner');
        if (window.innerWidth <= 900) {
            scrollVerticalBar('jobline', 'jobdot', 'joblineInner', 'jobpoint');
            scrollVerticalBar('eduline', 'edudot', 'edulineInner', 'edupoint');
        }

    }


    const scrollVerticalBar = (id, className, idInner, pointID) => {
        const scrollPosition = window.innerHeight * 0.5
        const innerLine = document.getElementById(idInner);
        const parentLineRect = document.getElementById(id).getBoundingClientRect();
        const innerLineRect = document.getElementById(idInner).getBoundingClientRect();
        const innerlineHeight = getCurrentHeigth(scrollPosition, parentLineRect, innerLineRect);
        innerLine.style.height = `${innerlineHeight}%`;
        activateDots(className, innerLineRect, pointID);
    }

    const getCurrentHeigth = (scrollPosition, parentLineRect, innerLineRect) => {
        const parentLineHeight = parentLineRect.bottom - parentLineRect.top;
        const innerLineHeight = scrollPosition - innerLineRect.top;
        let currentHeight;
        if (scrollPosition < innerLineRect.top) {
            currentHeight = 0;
        } else if (scrollPosition > parentLineRect.top && scrollPosition < parentLineRect.bottom) {
            currentHeight = (innerLineHeight / parentLineHeight) * 100;
        } else if (scrollPosition > parentLineRect.bottom) {
            currentHeight = 100;
        }
        return currentHeight
    }

    const activateDots = (className, innerLineRect, pointID) => {
        const dots = document.getElementsByClassName(className);
        const points = document.getElementsByClassName(pointID);


        for (let index = 0; index < dots.length; index++) {
            const dot = dots[index];
            const point = points[index];
            const dotRect = dot.getBoundingClientRect();

            if (dotRect.top < innerLineRect.bottom) {
                point.style.transform = 'scale(1)'
            } else {
                point.style.transform = 'scale(0)'


            }

        }


    }

    const setPosition = (id, className, parentDiv, idInner) => {
        const elements = getElements(id, className, parentDiv, idInner)
        const rects = getRects(elements)
        const calculatedValues = setElementStyles(rects, elements)
        elements.line.style.top = `${calculatedValues.topPosition}px`;
        elements.line.style.height = `${calculatedValues.lineHeight}px`;
        elements.line.style.left = `${calculatedValues.leftPosition}px`;

    }

    const getElements = (id, className, parentDiv, idInner) => {
        return {
            parent: document.getElementById(parentDiv),
            line: document.getElementById(id),
            dots: document.getElementsByClassName(className),
            lineInner: document.getElementById(idInner),
        }

    }

    const getRects = (elements) => {
        return {
            firstdotRect: elements.dots[0].getBoundingClientRect(),
            lastdotRect: elements.dots[elements.dots.length - 1].getBoundingClientRect(),
            parentRect: elements.parent.getBoundingClientRect(),
            lineRect: elements.line.getBoundingClientRect(),
            lineInnerRect: elements.lineInner.getBoundingClientRect(),
        }
    }

    const setElementStyles = (rects, divs) => {
        return {
            lineHeight: rects.lastdotRect.bottom - rects.firstdotRect.top,
            leftPosition: rects.firstdotRect.left + (rects.firstdotRect.width / 2) - rects.parentRect.left - (rects.lineRect.width / 2),
            topPosition: rects.firstdotRect.top - rects.parentRect.top,
        }




    }



    useEffect(() => {

        window.addEventListener('load', setLinePositions);
        window.addEventListener('resize', setLinePositions);
        window.addEventListener('scroll', setLinePositions);
        return () => {
            window.removeEventListener('load', setLinePositions);
            window.removeEventListener('resize', setLinePositions);
            window.addEventListener('scroll', setLinePositions);
        };
    }, []);

    return (
        <section className={styles.resumeSection} id="resume">
            <div className={`${styles.content} screenMargin`}>
                <Headline label={t('resume.headline')} />
                <div className={styles.resumeContainer}>
                    <div className={styles.jobContainer} id="jobcontainer">
                        <div className={styles.line} id="jobline">
                            <div className={styles.lineInner} id="joblineInner"></div>
                        </div>

                        <div className={styles.categoryTitle}>
                            <img src="./icons/work.svg" alt="" />
                            <h3>{t('resume.category.jobs')}</h3>
                        </div>

                        {workstations.map((station, index) => (
                            <div className={styles.step} key={index}>

                                <div className={`${styles.dot} jobdot`} >

                                    <div className={`${styles.point} jobpoint`}></div>

                                </div>
                                <div className={styles.description}>
                                    <h2>{station.jobtitle}</h2>
                                    <h3>{station.time}</h3>
                                    <p>{station.employer}</p>
                                    <span>{station.location}</span>
                                    <span>{station.description}</span>
                                </div>

                            </div>

                        ))}



                    </div>
                    <div className={styles.jobContainer} id="educontainer">
                        <div className={styles.line} id="eduline">
                            <div className={styles.lineInner} id="edulineInner"></div>
                        </div>
                        <div className={styles.categoryTitle}>
                            <img src="./icons/education.svg" alt="" />
                            <h3>{t('resume.category.education')}</h3>
                        </div>

                        {educations.map((station, index) => (
                            <div className={styles.step} key={index}>

                                <div className={`${styles.dot} edudot`} >

                                    <div className={`${styles.point} edupoint`}></div>

                                </div>
                                <div className={styles.description}>
                                    <h2>{station.educationtitle}</h2>
                                    <h3>{station.time}</h3>
                                    <p>{station.school}</p>
                                    <span>{station.location}</span>
                                    <span>{station.description}</span>
                                </div>

                            </div>

                        ))}



                    </div>
                </div>
            </div>


        </section>
    )

}

export default Resume