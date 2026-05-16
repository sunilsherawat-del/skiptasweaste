"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Image from "next/image";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Header from '../components/Header';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';

import "../about/style.css";

import dynamic from "next/dynamic";

const SkipBinBooking = dynamic(
  () => import("../components/SkipBinBooking"),
  { ssr: false }
);

const page = () => {
    return (
        <div className="pageContent">
            <Header />
            <div className='pageWraper'>
                <section className="innerBaner bannerSection pb-40" style={{ background: "url('../images/skip-banner.jpg') no-repeat center center / cover, rgb(0 0 0 / 60%)", backgroundBlendMode: "multiply", }}>
                    <div className="container">
                        <div className="row align-items-center row-gap-4">
                            <div className="col-lg-6">
                                <div className="title wow animate__animated animate__fadeInUp">
                                    <h1 className="section-title text-white">Skip Size</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Skip Size Bin</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6" id="booking">
                                <SkipBinBooking />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bins-section bg-white">
                    <div className="container">
                        <div className="text-center mb-5 wow animate__animated animate__fadeInUp">
                            <div className="section-label">Our Bin Size</div>
                            <h2 className="section-title mt-1">Available Skip Bins Size</h2>
                            <p className="text-muted mx-auto" style={{ maxWidth: 750 }}>
                                We offer a range of skip bin sizes, from our compact 2m³ mini skip to a spacious 30m³ large skip. Whether it's a small home clean-out or a major renovation, we have the perfect fit.
                            </p>
                        </div>
                        <div className="row g-4">
                            {/* Bin 1 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">2m³ Small Clean-Up</div>
                                        <div className="bin-desc">Perfect for small garden or household cleans</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />1.2m L × 1.2m W × 1.4m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–7 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 2 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">3m³ Garage Tip</div>
                                        <div className="bin-desc">Great for garage clear-outs and small renos</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />1.8m L × 1.2m W × 1.4m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–7 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 3 – Featured */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card position-relative wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">4m³ Standard Skip</div>
                                        <div className="bin-desc">Our most popular size — suits most jobs</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />2.4m L × 1.2m W × 1.4m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–7 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 4 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">6m³ Large Bin</div>
                                        <div className="bin-desc">Ideal for renovations and big landscaping jobs</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />3.1m L × 1.5m W × 1.5m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–7 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 5 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">8m³ XL Bin</div>
                                        <div className="bin-desc">For construction, commercial, or major cleanouts</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />3.7m L × 1.5m W × 1.8m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–14 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 6 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">10m³ Maxi Bin</div>
                                        <div className="bin-desc">Maximum capacity for industrial &amp; demolition</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />4.6m L × 1.5m W × 2.0m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–14 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 7 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">10m³ Maxi Bin</div>
                                        <div className="bin-desc">Maximum capacity for industrial &amp; demolition</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />4.6m L × 1.5m W × 2.0m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–14 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Bin 8 */}
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="bin-card wow animate__animated animate__fadeInUp">
                                    <div className="bin-card-img">
                                        <img src='../images/skipbin_img.png' alt='image' />
                                    </div>
                                    <div className="bin-card-body">
                                        <div className="bin-name">10m³ Maxi Bin</div>
                                        <div className="bin-desc">Maximum capacity for industrial &amp; demolition</div>
                                        <div className="bin-specs">
                                            <i className="bi bi-rulers" />4.6m L × 1.5m W × 2.0m H&nbsp;&nbsp;
                                            <i className="bi bi-clock" /> 3–14 day hire
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /row */}
                    </div>
                </section>
            </div>

            <FooterCta />
            <Footer />
        </div>
    )
}

export default page
