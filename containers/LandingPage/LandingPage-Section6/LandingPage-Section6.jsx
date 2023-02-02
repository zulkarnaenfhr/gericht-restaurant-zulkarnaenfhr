import Image from "next/image";
import React from "react";
import styles from "./LandingPage-Section6.module.css";

const LandingPageSection6 = () => {
    return (
        <div id={styles["LandingPage-Section6"]}>
            <div className={styles["LandingPage-Section6-Background-Container"]}>
                <Image className={styles["LandingPage-Section6-Background"]} src={require("../../../public/images/Section6-Background.png")} />
            </div>
            <div className={styles["LandingPage-Section6-Button-Container"]}>
                <div className={styles["LandingPage-Section6-Button-Container"]}>
                    <Image className={styles["LandingPage-Section6-Button"]} src={require("../../../public/images/Section6-Button.png")} />
                </div>
            </div>
        </div>
    );
};

export default LandingPageSection6;
