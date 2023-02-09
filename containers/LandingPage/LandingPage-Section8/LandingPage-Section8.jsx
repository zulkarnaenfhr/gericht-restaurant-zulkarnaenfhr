import Image from "next/image";
import React from "react";
import styles from "./LandingPage-Section8.module.css";

const LandingPageSection8 = () => {
    return (
        <div id={styles["LandingPage-Section8"]}>
            <div className={styles["LandingPage-Section8-Container"]}>
                <div className={styles["LandingPage-Section8-Container-Inside"]}>
                    <p data-aos="zoom-in-up" className={styles["LandingPage-Section8-Text1"]}>
                        Newsletter
                    </p>
                    <div
                        data-aos="zoom-in-up"
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
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
                    <p data-aos="zoom-in-up" className={styles["LandingPage-Section8-Text2"]}>
                        Subscribe to Our Newsletter
                    </p>
                    <p data-aos="zoom-in-up" className={styles["LandingPage-Section8-Text3"]}>
                        And never miss latest Updates!
                    </p>
                    <div className={styles["LandingPage-Section8-RowInput"]}>
                        <input data-aos="zoom-in-up" className={styles["LandingPage-Section8-Input"]} placeholder={"Email Address"} type="text" />
                        <button data-aos="zoom-in-up" data-aos-delay="400" className={styles["LandingPage-Section8-Button"]}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageSection8;
