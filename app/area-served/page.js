"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from '../components/Header';
import SkipBinBooking from '../components/SkipBinBooking';
import CoverageCity from '../components/CoverageCity';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';
import "../area-served/area.css";

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
                                    <h1 className="section-title text-white">Area Served</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Area served</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6" id="booking">
                                <SkipBinBooking />
                            </div>
                        </div>
                    </div>
                </section>

                 <section className="area-served my-80">
                    <div className="container">
                        <div className="text-center mb-5 wow animate__animated animate__fadeInUp">
                            <div className="section-label">Area Coverage</div>
                            <h2 className="section-title mt-1">We Deliver Across Tasmania</h2>
                            <p className="mx-auto" style={{ maxWidth: 520 }}>
                            From Hobart to Launceston, Devonport to the East Coast — if it's in Tassie, we can get there.
                            </p>
                        </div>
                        <CoverageCity />
                    </div>
                </section>

            </div>

            <FooterCta />
            <Footer />
        </div>
    )
}

export default page
