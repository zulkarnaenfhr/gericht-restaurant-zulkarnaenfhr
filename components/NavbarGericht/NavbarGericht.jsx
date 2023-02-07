import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavbarGericht.module.css";

export default function NavbarGericht() {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);

    return (
        <div id={styles["NavbarGericht"]}>
            <Navbar className={styles["NavbarGericht-Container"]} expand="lg" variant="dark">
                <Navbar.Brand className={styles["NavbarGericht-Brand"]} href="#home">
                    Gerícht
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{
                        position: "relative",
                    }}
                >
                    <Nav className="ms-auto">
                        {innerWidth < 992 ? (
                            <div>
                                <Nav.Link className={styles["NavbarGericht-Link"]} href="#link">
                                    Home
                                </Nav.Link>
                                <Nav.Link className={styles["NavbarGericht-Link"]} href="#link">
                                    Pages
                                </Nav.Link>
                                <Nav.Link className={styles["NavbarGericht-Link"]} href="#link">
                                    Contact Us
                                </Nav.Link>
                                <Nav.Link className={styles["NavbarGericht-Link"]} href="#link">
                                    Blog
                                </Nav.Link>
                                <Nav.Link className={styles["NavbarGericht-Link"]} href="#link">
                                    Landing
                                </Nav.Link>
                            </div>
                        ) : (
                            ""
                        )}

                        <Nav.Link className={styles["NavbarGericht-Link"]} href="#home">
                            Log In / Registration
                        </Nav.Link>

                        {innerWidth > 992 ? (
                            <div
                                style={{
                                    paddingRight: "10px",
                                    borderRight: "0.2px solid white",
                                    marginRight: "10px",
                                }}
                            ></div>
                        ) : (
                            ""
                        )}

                        <Nav.Link className={styles["NavbarGericht-Link"]} href="#link">
                            Book Table
                        </Nav.Link>
                    </Nav>
                    {innerWidth > 992 ? (
                        <div className={styles["NavbarGericht-ColumnCenter"]}>
                            <Nav.Link className={styles["NavbarGericht-LinkCenter"]} href="#link">
                                Home
                            </Nav.Link>
                            <Nav.Link className={styles["NavbarGericht-LinkCenter"]} href="#link">
                                Pages
                            </Nav.Link>
                            <Nav.Link className={styles["NavbarGericht-LinkCenter"]} href="#link">
                                Contact Us
                            </Nav.Link>
                            <Nav.Link className={styles["NavbarGericht-LinkCenter"]} href="#link">
                                Blog
                            </Nav.Link>
                            <Nav.Link className={styles["NavbarGericht-LinkCenter"]} href="#link">
                                Landing
                            </Nav.Link>
                        </div>
                    ) : (
                        ""
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
