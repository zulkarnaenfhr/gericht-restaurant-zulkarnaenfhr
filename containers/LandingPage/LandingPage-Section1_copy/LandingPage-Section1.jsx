import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

import styles from "./LandingPage-Section1.module.css";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LandingPageSection1 = () => {
    let useEffectCall = 0;

    const refText1 = useRef();
    const refText2 = useRef();
    const refButton = useRef();

    useEffect(() => {
        if (useEffectCall > 0) return;
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(refText1.current, 0, { x: -490, opacity: 0 });
        gsap.to(refText2.current, 0, { x: -490, opacity: 0 });
        gsap.to(refButton.current, 0, { x: -490, opacity: 0 });

        setTimeout(() => {
            gsap.to(refText1.current, 1.5, { x: 0, opacity: 1 });
        }, 500);

        setTimeout(() => {
            gsap.to(refText2.current, 1.5, { x: 0, opacity: 1 });
        }, 1000);

        setTimeout(() => {
            gsap.to(refButton.current, 2.5, { x: 0, opacity: 1 });
        }, 1000);

        useEffectCall++;
    }, []);

    return (
        <div id={styles["LandingPage-Section1"]}>
            <Row className={styles["LandingPage-Section1-Container"]}>
                <Col
                    md={6}
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div className={styles["LandingPage-Section1-Column-Left"]}>
                        <div className={styles["LandingPage-Section1-Column-Left-Container"]}>
                            <div
                                style={{
                                    overflow: "hidden",
                                }}
                            >
                                <p ref={refText1} className={styles["LandingPage-Section1-Text1"]}>
                                    Chase the new Flavour
                                </p>
                            </div>

                            <div
                                style={{
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    data-aos="zoom-in-right"
                                    style={{
                                        marginTop: "8px",
                                    }}
                                    src={require("../../../src/icon/yellow-spoon.svg")}
                                />
                            </div>

                            <div
                                style={{
                                    overflow: "hidden",
                                }}
                            >
                                <p data-aos="fade-up" className={styles["LandingPage-Section1-Text2"]}>
                                    The key to Fine dining
                                </p>
                            </div>

                            <div
                                style={{
                                    overflow: "hidden",
                                }}
                            >
                                <p ref={refText2} className={styles["LandingPage-Section1-Text3"]}>
                                    Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus{" "}
                                </p>
                            </div>

                            <div
                                style={{
                                    overflow: "hidden",
                                }}
                            >
                                <button data-aos="zoom-in-right" data-aos-duration="1500" className={styles["LandingPage-Section1-Button"]}>
                                    Expolre Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div data-aos="zoom-in-right" className={styles["LandingPage-Section1-Column-Right"]}>
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
                                        <Image className={styles["LandingPage-Section1-Column-Pictures"]} src={require("../../../public/images/Section1.png")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <button className={styles["LandingPage-Section1-ButtonCopy"]}>Expolre Menu</button>
            </Row>
        </div>
    );
};

export default LandingPageSection1;
