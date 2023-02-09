import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section4.module.css";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LandingPageSection4 = () => {
    let useEffectCall = 0;

    const refImageContainer = useRef();
    const refTextContainer = useRef();

    useEffect(() => {
        if (useEffectCall > 0) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(refImageContainer.current, 0, { yPercent: -10 });
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
            yPercent: 0,
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
        <div id={styles["LandingPage-Section4"]}>
            <div className={styles["LandingPage-Section4-Background-Container"]}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, #0c0b08 0%, transparent 100%)",
                        opacity: "0.7",
                        position: "absolute",
                    }}
                ></div>
                <Image className={styles["LandingPage-Section4-Background"]} src={require("../../../public/images/Section2-Background.png")} />
            </div>
            <Row className={styles["LandingPage-Section4-Container"]}>
                <Col ref={refImageContainer} md={6} className={styles["LandingPage-Section4-Column"]}>
                    <div className={styles["LandingPage-Section4-Left-Container"]}>
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
                                    <Image className={styles["LandingPage-Section1-Column-Pictures"]} src={require("../../../public/images/Section4-Chef.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col
                    ref={refTextContainer}
                    md={6}
                    className={styles["LandingPage-Section4-Column"]}
                    style={{
                        justifyContent: "left",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "480px",
                        }}
                    >
                        <p data-aos="zoom-in-right" className={styles["LandingPage-Section4-Text1"]}>
                            Chef’s Word
                        </p>
                        <Image
                            data-aos="zoom-in-right"
                            style={{
                                marginTop: "8px",
                                transform: "rotate(180deg)",
                            }}
                            src={require("../../../src/icon/yellow-spoon.svg")}
                        />
                        <p data-aos="zoom-in-right" className={styles["LandingPage-Section4-Text2"]}>
                            What we believe in
                        </p>
                        <p data-aos="zoom-in-right" className={styles["LandingPage-Section4-Text3"]}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
                            lectus eu. Congue iaculis integer curabitur semper sit nunc."
                        </p>
                        <p data-aos="zoom-in-right" className={styles["LandingPage-Section4-Text4"]}>
                            Kevin Luo
                        </p>
                        <p data-aos="zoom-in-right" className={styles["LandingPage-Section4-Text5"]}>
                            Chef & Founder
                        </p>
                        <div data-aos="zoom-in-right" className={styles["LandingPage-Section4-Signiature-Container"]}>
                            <Image className={styles["LandingPage-Section4-Signiature"]} src={require("../../../public/images/Section4-Signiature.png")} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LandingPageSection4;
