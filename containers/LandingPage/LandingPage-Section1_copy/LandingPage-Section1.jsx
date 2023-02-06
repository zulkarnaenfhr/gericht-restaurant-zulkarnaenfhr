import Image from "next/image";
import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./LandingPage-Section1.module.css";

const LandingPageSection1 = () => {
    return (
        <div id={styles["LandingPage-Section1"]}>
            <Row className={styles["LandingPage-Section1-Container"]}>
                <Col md={6}>
                    <div className={styles["LandingPage-Section1-Column-Left"]}>
                        <div className={styles["LandingPage-Section1-Column-Left-Container"]}>
                            <p className={styles["LandingPage-Section1-Text1"]}>Chase the new Flavour</p>

                            <Image
                                style={{
                                    marginTop: "8px",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />

                            <p className={styles["LandingPage-Section1-Text2"]}>The key to Fine dining</p>

                            <p className={styles["LandingPage-Section1-Text3"]}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                            <button className={styles["LandingPage-Section1-Button"]}>Expolre Menu</button>
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
