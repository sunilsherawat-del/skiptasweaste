import React from 'react'

export default function Header() {
  return (
    <header className='header-overlay'>
        <nav className="navbar navbar-expand-lg p-0">
            <div className="container justify-contevnt-between align-items-center">
                <div className='headerBar'>
                    <a className="navbar-brand fw-bold wow fadeInDown" href="index.html"><img src="/images/Logo.png" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-lg offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header justify-content-end">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body pt-0 justify-content-center">
                        {/*mobile menu*/}
                        <div className="cp_wrapper mobile-menu d-lg-none">
                            <h4 className="text-center">Menu</h4>
                            <aside className="mega-menu" id="mega-menu--mobile">
                            <div className="mega__container" data-active-depth={1} data-active-nav>
                                <div className="mega__header">
                                <div className="mega__controls">
                                    <button type="button" id="menu-back">
                                    <span className="btn__icon">
                                        <i className="fas fa-arrow-left" />
                                    </span>
                                    </button>
                                </div>
                                </div>
                                <div className="mega__body">
                                {/* 1 */}
                                <div className="mega__screen" data-menu-depth={1} data-active-menu="true">
                                    <nav className="navigation">
                                    <a href="index.html" className="btn">
                                        <span className="btn__label">Home</span>
                                    </a>
                                    <a href="about.html" className="btn">
                                        <span className="btn__label">About Us</span>
                                    </a>
                                    <span className="d-flex align-items-center justify-content-between">
                                        <a href="service.html" className="btn">
                                        <span className="btn__label">Services</span>
                                        <span className="btn__icon" />
                                        </a>
                                        <a href="#services" className="btn" aria-label="navigation-services">
                                        <span className="btn__icon" />
                                        </a>
                                    </span>
                                    <a href="blog.html" className="btn">
                                        <span className="btn__label">Blog</span>
                                    </a>
                                    <a href="faq.html" className="btn">
                                        <span className="btn__label">Faq</span>
                                    </a>
                                    <a href="contact.html" className="btn">
                                        <span className="btn__label">Contact</span>
                                    </a>
                                    </nav>
                                </div>
                                {/* 2 */}
                                {/* <div class="mega__screen" data-menu-depth="2" data-active-menu="false">
                                                        <nav class="navigation" aria-labelledby="navigation-services">
                                                            <span class="d-flex align-items-center justify-content-between">
                                                                <a href="#Therapy" class="btn d-flex justify-content-between" aria-label="services-therapy">
                                                                    <span class="btn__label">Massage Therapy</span>
                                                                    <span class="btn__icon"></span>
                                                                </a>
                                                            </span>
                                                            <span class="d-flex align-items-center justify-content-between">
                                                                <a href="#Spa" class="btn d-flex justify-content-between" aria-label="services-spa">
                                                                    <span class="btn__label">Foot Spa & Body</span>
                                                                    <span class="btn__icon"></span>
                                                                </a>
                                                            </span>
                                                            <span class="d-flex align-items-center justify-content-between">
                                                                <a href="#Treatments" class="btn d-flex justify-content-between" aria-label="services-treatments">
                                                                    <span class="btn__label">Facial & Skin Treatments</span>
                                                                    <span class="btn__icon"></span>
                                                                </a>
                                                            </span>
                                                        </nav>
                                                    </div> */}
                                </div>
                            </div>
                            </aside>
                        </div>
                        {/*dasktop menu*/}
                        <div className="menu-wrap d-none d-lg-block">
                            <ul className="navbar-nav menu justify-content-center wow fadeInDown">
                            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="area-served.html">Areas Served</a></li>
                            <li className="nav-item"><a className="nav-link" href="skip.html">Skip Sizes</a></li>
                            <li className="nav-item"><a className="nav-link" href="waste.html">Waste Types</a></li>
                            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="btn_header d-none d-lg-inline-block wow fadeInDown">
                        <div className="d-flex gap-2 mt-3 mt-lg-0">
                        <a href="tel:1300000000" className="theme-btn btn-outline-green rounded-5 theme-bg">
                            <i className="bi bi-telephone me-1" /> Call Us
                        </a>
                        <a href="#booking" className="theme-btn rounded-5 theme-bg">
                            Book a Skip <i className="bi bi-arrow-right ms-1" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}
