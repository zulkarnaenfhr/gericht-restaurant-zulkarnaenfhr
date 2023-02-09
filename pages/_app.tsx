import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            offset: 50,
            duration: 1000,
            delay: 50,
        });
    });
    return <Component {...pageProps} />;
}
