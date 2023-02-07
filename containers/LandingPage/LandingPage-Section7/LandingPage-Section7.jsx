import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section7.module.css";

const LandingPageSection7 = () => {
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
                        <div>
                            <p className={styles["LandingPage-Section7-Text1"]}>Contact</p>
                            <Image
                                style={{
                                    marginTop: "8px",
                                    transform: "rotate(180deg)",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                            <p className={styles["LandingPage-Section7-Text2"]}>Find Us</p>
                            <p className={styles["LandingPage-Section7-Text3"]}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                            <p className={styles["LandingPage-Section7-Text4"]}>Opening Hours</p>
                            <p className={styles["LandingPage-Section7-Text5"]}>Mon - Fri: 10:00 am - 02:00 am</p>
                            <p className={styles["LandingPage-Section7-Text6"]}>Sat - Sun: 10:00 am - 03:00 am</p>
                            <button className={styles["LandingPage-Section7-Button"]}>Visit Us</button>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={styles["LandingPage-Section1-Column-Right"]}>
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
