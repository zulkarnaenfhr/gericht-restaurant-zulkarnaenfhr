import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section7.module.css";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LandingPageSection7 = () => {
    let useEffectCall = 0;

    const refImageContainer = useRef();
    const refTextContainer = useRef();

    useEffect(() => {
        if (useEffectCall > 0) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(refImageContainer.current, 0, { yPercent: 10 });
        gsap.to(refTextContainer.current, 0, { yPercent: -5 });

        setTimeout(() => {
            setUpAnimations();
        }, 1000);

        useEffectCall++;
    }, []);

    const setUpAnimations = () => {
        gsap.to(refImageContainer.current, {
            yPercent: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refImageContainer.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refTextContainer.current, {
            yPercent: 5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refTextContainer.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
    };

    return (
        <div id={styles["LandingPage-Section7"]}>
            <div className={styles["LandingPage-Section7-Background-Container"]}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, #0c0b08 0%, transparent 100%)",
                        opacity: "0.9",
                        position: "absolute",
                    }}
                ></div>
                <Image className={styles["LandingPage-Section7-Background"]} src={require("../../../public/images/Section2-Background.png")} />
            </div>
            <Row className={styles["LandingPage-Section7-Container"]}>
                <Col md={6}>
                    <div className={styles["LandingPage-Section7-Column"]}>
                        <div ref={refTextContainer}>
                            <p data-aos="zoom-in-right" className={styles["LandingPage-Section7-Text1"]}>
                                Contact
                            </p>
                            <Image
                                data-aos="zoom-in-right"
                                style={{
                                    marginTop: "8px",
                                    transform: "rotate(180deg)",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                            <p data-aos="zoom-in-right" className={styles["LandingPage-Section7-Text2"]}>
                                Find Us
                            </p>
                            <p data-aos="zoom-in-right" className={styles["LandingPage-Section7-Text3"]}>
                                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                            </p>
                            <p data-aos="zoom-in-right" className={styles["LandingPage-Section7-Text4"]}>
                                Opening Hours
                            </p>
                            <p data-aos="zoom-in-right" className={styles["LandingPage-Section7-Text5"]}>
                                Mon - Fri: 10:00 am - 02:00 am
                            </p>
                            <p data-aos="zoom-in-right" className={styles["LandingPage-Section7-Text6"]}>
                                Sat - Sun: 10:00 am - 03:00 am
                            </p>
                            <button data-aos="zoom-in-right" className={styles["LandingPage-Section7-Button"]}>
                                Visit Us
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div ref={refImageContainer} className={styles["LandingPage-Section1-Column-Right"]}>
                        <div className={styles["LandingPage-Section1-Column-Right-Container"]}>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <div>
                                    <div className={styles["LandingPage-Section1-Column-Right-Box1"]}></div>
                                    <div className={styles["LandingPage-Section1-Column-Right-Box2"]}></div>
                                </div>
                                <div className={styles["LandingPage-Section1-Column-Pictures-Container-Parents"]}>
                                    <div className={styles["LandingPage-Section1-Column-Pictures-Container"]}>
                                        <Image className={styles["LandingPage-Section1-Column-Pictures"]} src={require("../../../public/images/Section7-Image.png")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LandingPageSection7;
