import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section4.module.css";

const LandingPageSection4 = () => {
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
                <Col md={6} className={styles["LandingPage-Section4-Column"]}>
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
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col
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
                        <p className={styles["LandingPage-Section4-Text1"]}>Chef’s Word</p>
                        <Image
                            style={{
                                marginTop: "8px",
                                transform: "rotate(180deg)",
                            }}
                            src={require("../../../src/icon/yellow-spoon.svg")}
                        />
                        <p className={styles["LandingPage-Section4-Text2"]}>What we believe in</p>
                        <p className={styles["LandingPage-Section4-Text3"]}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
                            lectus eu. Congue iaculis integer curabitur semper sit nunc."
                        </p>
                        <p className={styles["LandingPage-Section4-Text4"]}>Kevin Luo</p>
                        <p className={styles["LandingPage-Section4-Text5"]}>Chef & Founder</p>
                        <div className={styles["LandingPage-Section4-Signiature-Container"]}>
                            <Image className={styles["LandingPage-Section4-Signiature"]} src={require("../../../public/images/Section4-Signiature.png")} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LandingPageSection4;
