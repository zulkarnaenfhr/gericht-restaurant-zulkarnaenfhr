import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./LandingPage-Section3.module.css";

const LandingPageSection3 = () => {
    return (
        <div id={styles["LandingPage-Section3"]}>
            <p className={styles["LandingPage-Section3-Title1"]}>Menu that fits you palatte</p>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                <Image
                    style={{
                        marginTop: "8px",
                        transform: "rotate(180deg)",
                    }}
                    src={require("../../../src/icon/yellow-spoon.svg")}
                />
            </div>
            <p className={styles["LandingPage-Section3-Title2"]}>Today’s Special</p>
            <div className={styles["LandingPage-Section3-Container-Parents"]}>
                <div className={styles["LandingPage-Section3-Container"]}>
                    <Row
                        style={{
                            width: "100%",
                        }}
                    >
                        <Col lg={4}>
                            <div className={styles["LandingPage-Section3-Column-Left"]}>
                                <div
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <p className={styles["LandingPage-Section3-Column-Title"]}>Wine & Beer</p>
                                    <div className={styles["LandingPage-Section3-Column-Content-Container"]}>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Chapel Hill Shiraz</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$56</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>AU | Bottle</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Catena Malbec</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$59</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>AU | Bottle</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>La Vieille Rosé</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$44</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>FR | 750 ml</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Rhino Pale Ale</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$31</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>CA | 750 ml</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Irish Guinness</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$26</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>IE | 750 ml</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles["LandingPage-Section3-Column-Middle"]}>
                                <div md={4} className={styles["LandingPage-Section2-Knife-Container-Parents"]}>
                                    <div md={4} className={styles["LandingPage-Section2-Knife-Container"]}>
                                        <Image className={styles["LandingPage-Section2-Knife"]} src={require("../../../public/images/Section3-Vector.png")} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles["LandingPage-Section3-Column-Left"]}>
                                <div
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <p className={styles["LandingPage-Section3-Column-Title"]}>Cocktails</p>
                                    <div className={styles["LandingPage-Section3-Column-Content-Container"]}>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Aperol Spritz</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$20</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>Aperol | Villa Marchesi prosecco | soda | 30ml</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Dark 'N' Stormy</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$16</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>Dark rum | Ginger beer | Slice of lime. </p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Daiquiri</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$10</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>Rum | Citrus juice | Sugar</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Old Fashioned</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$31</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>Bourbon | Brown sugar | Angostura Bitters</p>
                                        </div>
                                        <div>
                                            <Row className={styles["LandingPage-Section3-Column-Little-Row"]}>
                                                <Col md={7} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Menu"]}>Negroni</p>
                                                </Col>
                                                <Col md={3} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <div className={styles["LandingPage-Section3-Border"]}></div>
                                                </Col>
                                                <Col md={2} className={styles["LandingPage-Section3-Column-Little"]}>
                                                    <p className={styles["LandingPage-Section3-Column-Content-Prices"]}>$26</p>
                                                </Col>
                                            </Row>
                                            <p className={styles["LandingPage-Section3-Column-DetailsCategory"]}>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default LandingPageSection3;
