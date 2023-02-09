import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section2.module.css";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const LandingPageSection2 = () => {
    const refText1Left = useRef();
    const refText2Left = useRef();
    const refButtonLeft = useRef();

    const refText1Right = useRef();
    const refText2Right = useRef();
    const refButtonRight = useRef();

    const refKnife = useRef();

    let useEffectCall = 0;

    useEffect(() => {
        if (useEffectCall > 0) return;

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(refText1Left.current, 0, { x: 490, opacity: 0 });
        gsap.to(refText2Left.current, 0, { x: 200, opacity: 0 });
        gsap.to(refButtonLeft.current, 0, { x: 200, opacity: 0 });

        gsap.to(refText1Right.current, 0, { x: -490, opacity: 0 });
        gsap.to(refText2Right.current, 0, { x: -200, opacity: 0 });
        gsap.to(refButtonRight.current, 0, { x: -200, opacity: 0 });

        gsap.to(refKnife.current, 0, { x: 200, rotate: 90, y: 400, opacity: 1 });

        setUpAnimations();

        useEffectCall++;
    }, []);

    const setUpAnimations = () => {
        gsap.to(refText1Left.current, {
            x: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refText1Left.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refText2Left.current, {
            x: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refText2Left.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refButtonLeft.current, {
            x: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refButtonLeft.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });

        gsap.to(refText1Right.current, {
            x: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refText1Right.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refText2Right.current, {
            x: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refText2Right.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });
        gsap.to(refButtonRight.current, {
            x: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refButtonRight.current,
                start: "center 100%",
                end: "center 50%",
                scrub: 1,
            },
        });

        gsap.to(refKnife.current, {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: refKnife.current,
                start: "center 150%",
                end: "center 95%",
                scrub: 1,
            },
        });
    };

    return (
        <div id={styles["LandingPage-Section2"]}>
            <div className={styles["LandingPage-Section2-Background-Container"]}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, #0c0b08 0%, transparent 100%)",
                        opacity: "0.7",
                        position: "absolute",
                    }}
                ></div>
                <Image className={styles["LandingPage-Section2-Background"]} src={require("../../../public/images/Section2-Background.png")} />
            </div>
            <Row className={styles["LandingPage-Section2-Container"]}>
                <Col md={5} className={styles["LandingPage-Section2-Column-Left"]}>
                    <div>
                        <div
                            style={{
                                overflow: "hidden",
                            }}
                        >
                            <p ref={refText1Left} className={styles["LandingPage-Section2-Left-Text1"]}>
                                About Us
                            </p>
                        </div>
                        <div className={styles["LandingPage-Section2-Left-Container"]}>
                            <Image
                                style={{
                                    marginTop: "8px",
                                    transform: "rotate(180deg)",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                        </div>
                        <div
                            style={{
                                overflow: "hidden",
                            }}
                        >
                            <p ref={refText2Left} className={styles["LandingPage-Section2-Left-Text2"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                            </p>
                        </div>
                        <div
                            style={{
                                overflow: "hidden",
                            }}
                            className={styles["LandingPage-Section2-Left-Container"]}
                        >
                            <div ref={refButtonLeft}>
                                <button className={styles["LandingPage-Section2-Left-Button"]}>Know More</button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={2} className={styles["LandingPage-Section2-Column-Middle"]}>
                    <div md={4} className={styles["LandingPage-Section2-Knife-Container-Parents"]}>
                        <div md={4} className={styles["LandingPage-Section2-Knife-Container"]}>
                            <Image ref={refKnife} className={styles["LandingPage-Section2-Knife"]} src={require("../../../public/images/Section2-Knife.png")} />
                        </div>
                    </div>
                </Col>
                <Col md={5} className={styles["LandingPage-Section2-Column-Right"]}>
                    <div>
                        <div
                            style={{
                                overflow: "hidden",
                            }}
                        >
                            <p ref={refText1Right} className={styles["LandingPage-Section2-Right-Text1"]}>
                                Our History
                            </p>
                        </div>
                        <div className={styles["LandingPage-Section2-Right-Container"]}>
                            <Image
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
                            <p ref={refText2Right} className={styles["LandingPage-Section2-Right-Text2"]}>
                                Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.{" "}
                            </p>
                        </div>
                        <div
                            style={{
                                overflow: "hidden",
                            }}
                            className={styles["LandingPage-Section2-Right-Container"]}
                        >
                            <div ref={refButtonRight}>
                                <button className={styles["LandingPage-Section2-Right-Button"]}>Know More</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LandingPageSection2;
