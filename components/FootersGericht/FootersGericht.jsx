import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./FootersGericht.module.css";

const FootersGericht = () => {
    return (
        <div id={styles["FooterGericht"]}>
            <div className={styles["FooterGericht-Container"]}>
                <Row>
                    <Col md={4}>
                        <p data-aos="zoom-in-up" className={styles["FooterGericht-Title2"]}>
                            Contact Us
                        </p>
                        <div className={styles["FooterGericht-Desc-Container"]}>
                            <p data-aos="zoom-in-up" data-aos-delay="200" className={styles["FooterGericht-Desc"]}>
                                9 W 53rd St, New York, NY 10019, USA
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" className={styles["FooterGericht-Desc"]}>
                                +1 212-344-1230
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="400" className={styles["FooterGericht-Desc"]}>
                                +1 212-344-1230
                            </p>
                        </div>
                    </Col>
                    <Col md={4} className={styles["FooterGericht-Column"]}>
                        <p data-aos="zoom-in-up" className={styles["FooterGericht-Title1"]}>
                            Gerícht
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="200" className={styles["FooterGericht-Desc-Middle"]}>
                            &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
                        </p>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            data-aos="zoom-in-up"
                            data-aos-delay="400"
                        >
                            <Image
                                style={{
                                    marginTop: "8px",
                                }}
                                src={require("../../src/icon/yellow-spoon.svg")}
                            />
                        </div>
                    </Col>
                    <Col md={4} className={styles["FooterGericht-Column"]}>
                        <p data-aos="zoom-in-up" className={styles["FooterGericht-Title2"]}>
                            Working Hours
                        </p>
                        <div className={styles["FooterGericht-Desc-Container"]}>
                            <p data-aos="zoom-in-up" data-aos-delay="100" className={styles["FooterGericht-Desc"]}>
                                Monday-Friday:
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="200" className={styles["FooterGericht-Desc"]}>
                                08:00 am -12:00 am
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="300" className={styles["FooterGericht-Desc"]}>
                                Saturday-Sunday:
                            </p>
                            <p data-aos="zoom-in-up" data-aos-delay="400" className={styles["FooterGericht-Desc"]}>
                                07:00am -11:00 pm
                            </p>
                        </div>
                    </Col>
                </Row>
                <div data-aos="zoom-in-up" className={styles["FooterGericht-FooterSigniature"]}>
                    Design and Develop by{" "}
                    <a className={styles["FooterGericht-LinkFahri"]} href="https://zulkarnaenfhr.github.io/">
                        SpaceCapt-Tech
                    </a>{" "}
                    @Endemic2023 Colaborate with
                    <a
                        className={styles["FooterGericht-LinkIconiq"]}
                        href="https://iqonic.design/product/wordpress-themes/gericht-best-free-wordpress-theme-for-restaurant/?utm_source=referral&utm_medium=Figma-Community&utm_campaign=Geritch-WordPress-Figma-Community"
                    >
                        {" "}
                        Iqonic.design
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FootersGericht;
