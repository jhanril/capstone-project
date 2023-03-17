import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/header.css";

function Header() {
    const [navbarlinks, setNavbarlinks] = useState([]);

    useEffect(() => {
        setNavbarlinks(document.querySelectorAll("#navbar .scrollto"));
    }, []);

    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = document.querySelector(navbarlink.hash);
            if (!section) return;
            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                navbarlink.classList.add("active");
            } else {
                navbarlink.classList.remove("active");
            }
        });
    };

    const scrollto = (el) => {
        let header = document.querySelector("#header");
        let offset = header.offsetHeight;

        if (!header.classList.contains("header-scrolled")) {
            offset -= 20;
        }

        let elementPos = document.querySelector(el).offsetTop;
        window.scrollTo({
            top: elementPos - offset,
            behavior: "smooth",
        });
    };

    // const toggleMobileNav = () => {
    //     document.querySelector("#navbar").classList.toggle("navbar-mobile");
    // };

    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            document.querySelector(".back-to-top").classList.add("active");
        } else {
            document.querySelector(".back-to-top").classList.remove("active");
        }
    };

    useEffect(() => {
        navbarlinksActive();
        window.addEventListener("scroll", navbarlinksActive);

        const selectHeader = document.querySelector("#header");

        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add("header-scrolled");
            } else {
                selectHeader.classList.remove("header-scrolled");
            }
        };
        headerScrolled();
        window.addEventListener("scroll", headerScrolled);

        const backtotop = document.querySelector(".back-to-top");
        const navbarMobileToggle = document.querySelector(".mobile-nav-toggle");

        if (backtotop && navbarMobileToggle) {
            window.addEventListener("scroll", toggleBacktotop);
            toggleBacktotop();

            navbarMobileToggle.addEventListener("click", (e) => {
                e.preventDefault;
                // alert("test1");
                document
                    .querySelector("#navbar")
                    .classList.toggle("navbar-mobile");
            });
            // navbarlinks.forEach((link) => {
            //     link.addEventListener("click", toggleMobileNav);
            //     link.addEventListener("click", (e) => {
            //         e.preventDefault();
            //         scrollto(link.hash);
            //     });
            // });
        }
    }, [navbarlinks]);

    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <div className="logo me-auto">
                        <h1>
                            <a href="index.html">LOGO HERE</a>
                        </h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="nav-link scrollto active"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="nav-link scrollto active"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <a href="#services">Jobs</a>
                            </li>
                            <li>
                                <a href="#portfolio">Job Stages</a>
                            </li>
                            <li>
                                <a href="#team">Followers</a>
                            </li>
                            <li style={{ visibility: "hidden" }}>
                                <a href="blog.html">Spacer man</a>
                            </li>
                            <li class="dropdown">
                                <a href="#">
                                    <span>Account</span>
                                    <i class="bi bi-chevron-down dropdown-indicator"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">Change Password</a>
                                    </li>
                                    <li>
                                        <a href="#">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    </nav>
                </div>
            </header>
            <main id="main" style={{ height: "2000px" }}>
                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
}

export default Header;
