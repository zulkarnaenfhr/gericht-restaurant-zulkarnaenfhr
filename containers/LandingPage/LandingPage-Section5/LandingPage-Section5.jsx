import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section5.module.css";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LandingPageSection5 = () => {
    let useEffectCall = 0;

    const refImageContainer = useRef();

    useEffect(() => {
        if (useEffectCall > 0) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(refImageContainer.current, 0, { yPercent: 10 });

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
    };

    return (
        <div id={styles["LandingPage-Section5"]}>
            <div className={styles["LandingPage-Section5-Container"]}>
                <Row>
                    <Col className={styles["LandingPage-Section5-Column"]} md={6} lg={7}>
                        <div className={styles["LandingPage-Section5-Column-Left-Container"]}>
                            <p data-aos="zoom-out-up" className={styles["LandingPage-Section5-text1"]}>
                                Awards & recognition
                            </p>
                            <Image
                                data-aos="zoom-out-up"
                                style={{
                                    marginTop: "8px",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                            <p data-aos="zoom-out-up" className={styles["LandingPage-Section5-text2"]}>
                                Our Laurels
                            </p>
                            <Row className={styles["LandingPage-Section5-Column-Little-Row"]}>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div data-aos="zoom-out-up" className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No2.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p data-aos="zoom-out-up" data-aos-delay="200" className={styles["LandingPage-Section5-Column-Little-Title"]}>
                                            Bib Gourmond
                                        </p>
                                        <p data-aos="zoom-out-up" data-aos-delay="400" className={styles["LandingPage-Section5-Column-Little-Desc"]}>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </Col>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div data-aos="zoom-out-up" className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No1.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p data-aos="zoom-out-up" data-aos-delay="200" className={styles["LandingPage-Section5-Column-Little-Title"]}>
                                            Rising Star
                                        </p>
                                        <p data-aos="zoom-out-up" data-aos-delay="400" className={styles["LandingPage-Section5-Column-Little-Desc"]}>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles["LandingPage-Section5-Column-Little-Row"]}>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div data-aos="zoom-out-up" className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No5.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p data-aos="zoom-out-up" data-aos-delay="200" className={styles["LandingPage-Section5-Column-Little-Title"]}>
                                            AA Hospitality
                                        </p>
                                        <p data-aos="zoom-out-up" data-aos-delay="400" className={styles["LandingPage-Section5-Column-Little-Desc"]}>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </Col>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div data-aos="zoom-out-up" className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No3.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p data-aos="zoom-out-up" data-aos-delay="200" className={styles["LandingPage-Section5-Column-Little-Title"]}>
                                            Outstanding Chef
                                        </p>
                                        <p data-aos="zoom-out-up" data-aos-delay="400" className={styles["LandingPage-Section5-Column-Little-Desc"]}>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col ref={refImageContainer} className={styles["LandingPage-Section5-Column-Right"]} md={6} lg={5}>
                        <div className={styles["LandingPage-Section5-Image-Container"]}>
                            <Image className={styles["LandingPage-Section5-Image"]} src={require("../../../public/images/Section5-Right.png")} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LandingPageSection5;
