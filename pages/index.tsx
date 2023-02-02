import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
// import LandingPageSection1 from "../containers/LandingPage/LandingPage-Section1/LandingPage-Section1";
import LandingPageSection1 from "../containers/LandingPage/LandingPage-Section1_copy/LandingPage-Section1";
import LandingPageSection2 from "../containers/LandingPage/LandingPage-Section2/LandingPage-Section2";
import LandingPageSection3 from "../containers/LandingPage/LandingPage-Section3/LandingPage-Section3";
import LandingPageSection4 from "../containers/LandingPage/LandingPage-Section4/LandingPage-Section4";
import LandingPageSection5 from "../containers/LandingPage/LandingPage-Section5/LandingPage-Section5";
import LandingPageSection6 from "../containers/LandingPage/LandingPage-Section6/LandingPage-Section6";
import LandingPageSection7 from "../containers/LandingPage/LandingPage-Section7/LandingPage-Section7";
import LandingPageSection8 from "../containers/LandingPage/LandingPage-Section8/LandingPage-Section8";
import NavbarGericht from "../components/NavbarGericht/NavbarGericht";

export default function Home() {
    return (
        <>
            <Head>
                <title>Gericht Restaurant</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="Navbar-Section">
                    <NavbarGericht />
                </div>
                <div className="Main-Section">
                    <LandingPageSection1 />
                    <LandingPageSection2 />
                    <LandingPageSection3 />
                    <LandingPageSection4 />
                    <LandingPageSection5 />
                    <LandingPageSection6 />
                    <LandingPageSection7 />
                    <LandingPageSection8 />
                </div>
            </main>
        </>
    );
}
