import Image from "next/image";
import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./LandingPage-Section1.module.css";

const LandingPageSection1 = () => {
    return (
        <div id={styles["LandingPage-Section1"]}>
            <div className={styles["LandingPage-Section1-Container"]}>
                <Row>
                    <Col className={styles["LandingPage-Section1-Column-Left"]}>
                        <div className={styles["LandingPage-Section1-Column-Left-Container"]}>
                            <p className={styles["LandingPage-Section1-Text1"]}>Chase the new Flavour</p>

                            <Image
                                style={{
                                    marginTop: "8px",
                                }}
                                src={require("../../../src/icon/yellow-spoon.svg")}
                            />

                            <p className={styles["LandingPage-Section1-Text2"]}>
                                The key to <br /> Fine dining
                            </p>

                            <p className={styles["LandingPage-Section1-Text3"]}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                            <button className={styles["LandingPage-Section1-Button"]}>Expolre Menu</button>
                        </div>
                    </Col>
                    <Col>
                        <h1>kanan</h1>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LandingPageSection1;
