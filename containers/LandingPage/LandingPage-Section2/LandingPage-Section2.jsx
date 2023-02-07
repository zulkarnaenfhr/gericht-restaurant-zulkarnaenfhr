import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section2.module.css";

const LandingPageSection2 = () => {
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
                        <p className={styles["LandingPage-Section2-Left-Text1"]}>About Us</p>
                        <div className={styles["LandingPage-Section2-Left-Container"]}>
                            <Image
                                style={{
                                    marginTop: "8px",
                                    transform: "rotate(180deg)",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                        </div>
                        <p className={styles["LandingPage-Section2-Left-Text2"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                        </p>
                        <div className={styles["LandingPage-Section2-Left-Container"]}>
                            <button className={styles["LandingPage-Section2-Left-Button"]}>Know More</button>
                        </div>
                    </div>
                </Col>
                <Col md={2} className={styles["LandingPage-Section2-Column-Middle"]}>
                    <div md={4} className={styles["LandingPage-Section2-Knife-Container-Parents"]}>
                        <div md={4} className={styles["LandingPage-Section2-Knife-Container"]}>
                            <Image className={styles["LandingPage-Section2-Knife"]} src={require("../../../public/images/Section2-Knife.png")} />
                        </div>
                    </div>
                </Col>
                <Col md={5} className={styles["LandingPage-Section2-Column-Right"]}>
                    <div>
                        <p className={styles["LandingPage-Section2-Right-Text1"]}>Our History</p>
                        <div className={styles["LandingPage-Section2-Right-Container"]}>
                            <Image
                                style={{
                                    marginTop: "8px",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />
                        </div>
                        <p className={styles["LandingPage-Section2-Right-Text2"]}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet. </p>
                        <div className={styles["LandingPage-Section2-Right-Container"]}>
                            <button className={styles["LandingPage-Section2-Right-Button"]}>Know More</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LandingPageSection2;
