import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <header className='header-overlay wow animate__animated animate__fadeInUp'>
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
                            {/*dasktop menu*/}
                            <div className="menu-wrap">
                                <ul className="navbar-nav menu justify-content-center">
                                    <li className="nav-item active"><Link className="nav-link" href="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="">Areas Served</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="">Skip Sizes</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="">Waste Types</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/blog">Blog</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="btn_header d-md-none">
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
                    <div className="btn_header d-none d-lg-inline-block">
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
