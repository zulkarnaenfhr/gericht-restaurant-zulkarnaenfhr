import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section5.module.css";

const LandingPageSection5 = () => {
    return (
        <div id={styles["LandingPage-Section5"]}>
            <div className={styles["LandingPage-Section5-Container"]}>
                <Row>
                    <Col className={styles["LandingPage-Section5-Column"]} md={6} lg={7}>
                        <div className={styles["LandingPage-Section5-Column-Left-Container"]}>
                            <p className={styles["LandingPage-Section5-text1"]}>Awards & recognition</p>
                            <Image
                                style={{
                                    marginTop: "8px",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                            <p className={styles["LandingPage-Section5-text2"]}>Our Laurels</p>
                            <Row className={styles["LandingPage-Section5-Column-Little-Row"]}>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No2.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p className={styles["LandingPage-Section5-Column-Little-Title"]}>Bib Gourmond</p>
                                        <p className={styles["LandingPage-Section5-Column-Little-Desc"]}>Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </Col>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No1.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p className={styles["LandingPage-Section5-Column-Little-Title"]}>Rising Star</p>
                                        <p className={styles["LandingPage-Section5-Column-Little-Desc"]}>Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles["LandingPage-Section5-Column-Little-Row"]}>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No5.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p className={styles["LandingPage-Section5-Column-Little-Title"]}>AA Hospitality</p>
                                        <p className={styles["LandingPage-Section5-Column-Little-Desc"]}>Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </Col>
                                <Col className={styles["LandingPage-Section5-Column-Little"]}>
                                    <div className={styles["LandingPage-Section5-Column-Little-Icon-Container"]}>
                                        <Image className={styles["LandingPage-Section5-Column-Little-Icon"]} src={require("../../../public/images/Section5-No3.png")} />
                                    </div>
                                    <div
                                        style={{
                                            paddingLeft: "22px",
                                        }}
                                    >
                                        <p className={styles["LandingPage-Section5-Column-Little-Title"]}>Outstanding Chef</p>
                                        <p className={styles["LandingPage-Section5-Column-Little-Desc"]}>Lorem ipsum dolor sit amet, consectetur.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className={styles["LandingPage-Section5-Column-Right"]} md={6} lg={5}>
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
