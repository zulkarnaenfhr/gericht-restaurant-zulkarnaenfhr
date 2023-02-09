import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section3.module.css";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LandingPageSection3 = () => {
    let useEffectCall = 0;

    const refContainerUp = useRef();
    const refContainerLeft = useRef();
    const refContainerRight = useRef();

    useEffect(() => {
        if (useEffectCall > 0) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(refContainerUp.current, 0, { yPercent: -40 });
        gsap.to(refContainerLeft.current, 0, { yPercent: -10 });
        gsap.to(refContainerRight.current, 0, { yPercent: -10 });

        setTimeout(() => {
            setUpAnimations();
        }, 1000);

        useEffectCall++;
    }, []);

    const setUpAnimations = () => {
        gsap.to(refContainerUp.current, {
            yPercent: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refContainerUp.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refContainerLeft.current, {
            yPercent: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refContainerLeft.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refContainerRight.current, {
            yPercent: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refContainerRight.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
    };

    return (
        <div id={styles["LandingPage-Section3"]}>
            <div>
                <div ref={refContainerUp}>
                    <p data-aos="fade-up" className={styles["LandingPage-Section3-Title1"]}>
                        Menu that fits you palatte
                    </p>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                        }}
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Image
                            style={{
                                marginTop: "8px",
                                transform: "rotate(180deg)",
                            }}
                            src={require("../../../src/icon/yellow-spoon.svg")}
                        />
                    </div>
                    <p data-aos="fade-up" data-aos-delay="400" className={styles["LandingPage-Section3-Title2"]}>
                        Today’s Special
                    </p>
                </div>
                <div className={styles["LandingPage-Section3-Container-Parents"]}>
                    <div className={styles["LandingPage-Section3-Container"]}>
                        <Row
                            style={{
                                width: "100%",
                            }}
                        >
                            <Col ref={refContainerLeft} md={4}>
                                <div className={styles["LandingPage-Section3-Column-Left"]}>
                                    <div
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        <p data-aos="zoom-in-right" className={styles["LandingPage-Section3-Column-Title"]}>
                                            Wine & Beer
                                        </p>
                                        <div className={styles["LandingPage-Section3-Column-Content-Container"]}>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-right" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Chapel Hill Shiraz</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$56</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-right" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    AU | Bottle
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-right" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Catena Malbec</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$59</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-right" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    AU | Bottle
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-right" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>La Vieille Rosé</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$44</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-right" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    FR | 750 ml
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-right" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Rhino Pale Ale</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$31</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-right" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    CA | 750 ml
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-right" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Irish Guinness</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-right" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$26</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-right" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    IE | 750 ml
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={styles["LandingPage-Section3-Column-Middle"]}>
                                    <div className={styles["LandingPage-Section3-Column-Middle"]}>
                                        <div md={4} className={styles["LandingPage-Section2-Knife-Container-Parents"]}>
                                            <div md={4} className={styles["LandingPage-Section2-Knife-Container"]}>
                                                <Image className={styles["LandingPage-Section2-Knife"]} src={require("../../../public/images/Section3-Vector.png")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col ref={refContainerRight} md={4}>
                                <div className={styles["LandingPage-Section3-Column-Left"]}>
                                    <div
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        <p data-aos="zoom-in-left" className={styles["LandingPage-Section3-Column-Title"]}>
                                            Cocktails
                                        </p>
                                        <div className={styles["LandingPage-Section3-Column-Content-Container"]}>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-left" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Aperol Spritz</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$20</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-left" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    Aperol | Villa Marchesi prosecco | soda | 30ml
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-left" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Dark 'N' Stormy</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$16</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-left" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    Dark rum | Ginger beer | Slice of lime.{" "}
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-left" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Daiquiri</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$10</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-left" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    Rum | Citrus juice | Sugar
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-left" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Old Fashioned</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$31</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-left" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    Bourbon | Brown sugar | Angostura Bitters
                                                </p>
                                            </div>
                                            <div>
                                                <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                    <Col data-aos="zoom-in-left" md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Negroni</p>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <div className={styles["LandingPage-Section3-Border"]}></div>
                                                    </Col>
                                                    <Col data-aos="zoom-in-left" md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                        <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$26</p>
                                                    </Col>
                                                </Row>
                                                <p data-aos="zoom-in-left" className={styles["LandingPage-Section3-Column-DetailsCategory"]}>
                                                    Gin | Sweet Vermouth | Campari | Orange garnish
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageSection3;
