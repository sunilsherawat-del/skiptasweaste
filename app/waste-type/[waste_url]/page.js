"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from '../../components/Header';
import FooterCta from '../../components/FooterCta';
import Footer from '../../components/Footer';

import dynamic from "next/dynamic";

const SkipBinBooking = dynamic(
    () => import("../../components/SkipBinBooking"),
    { ssr: false }
);

import "../style.css";

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
                                    <h1 className="section-title text-white">General Waste</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item href="#">Waste Type</Breadcrumb.Item>
                                        <Breadcrumb.Item active>General Waste</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6" id="booking">
                                <SkipBinBooking />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wasteDetail my-80">
                    <div className="container">
                        <div className="row row-gap-4">
                            <div className="col-12 col-lg-6">
                                <div className="imgBx">
                                    <img src="../images/greenWaste.jpg" className="img-fluid rounded-4"  />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="description wow animate__animated animate__fadeInUp">
                                    <h2 className="section-title mb-3">Fast, Clean & Hassle-Free General Waste Disposal</h2>
                                    <p className="mx-auto">
                                        Get rid of unwanted household, office and site waste easily with our trusted general waste removal services. We have made our services to give you stree free cleanup experience. We specialize in swift, safe and responsible disposal of everyday household non-hazardous items. Our professional team makes sure of a quick and efficient pickup to clear your space. Whether it is a full house clearance or clearing out a commercial space, we handle the heavy lifting and responsible disposal with our general waste skip bin. Enjoy a clean, functional and spotless environment with our affordable waste management service.
                                    </p>
                                    <h4>What is General Waste?</h4>
                                    <p>General waste has mixed, light and non-toxic materials who generats from the house clearance office cleanouts or small renovation projects. This has items like unwanted furniture, paper, cardboard, broken appliances and general mess that do not come under any unsafe and banned category.</p>
                                    <a href="#" className="theme-btn rounded-3">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="acceptedWaste py-80 my-80 grayBg">
                    <div className="container">
                        <div className="text-center mb-5 wow animate__animated animate__fadeInUp">
                            <div className="section-label">Accepted Waste</div>
                            <h2 className="section-title mt-1 mb-2 m-auto" style={{ maxWidth: 800 }}>What We Accept in the General Waste Skip Bin</h2>
                            <p className="mx-auto" style={{ maxWidth: 520 }}>
                                From Hobart to Launceston, Devonport to the East Coast — if it's in Tassie, we can get there.
                            </p>
                        </div>
                        <div className="row row-gap-4">
                            <div className="col-12 col-lg-6">
                                <div className="card border-0 rounded-4 p-40">
                                    <h3 className="mb-4">What We Accept in the General Waste Skip Bin</h3>
                                    <ul className="list-unstyled put-list">
                                        <li>Household rubbish</li>
                                        <li>Furniture & mattresses</li>
                                        <li>Cardboard & packaging materials</li>
                                        <li>Plastics & wrapping waste</li>
                                        <li>Paper & office waste</li>
                                        <li>Wood, timber & plywood</li>
                                        <li>Light renovation debris</li>
                                        <li>Clothes, fabrics & soft furnishings</li>
                                        <li>Toys, broken items & general clutter</li>
                                    </ul>
                                    <div><a href="#" className="theme-btn rounded-3">Book Now</a></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card border-0 rounded-4 p-40">
                                    <h3 className="mb-4">What We Don’t Accept in the General Waste Skip Bin</h3>
                                    <ul className="list-unstyled no-put-list">
                                        <li>Asbestos or hazardous materials</li>
                                        <li>Chemicals, oils & liquid waste</li>
                                        <li>Cardboard & packaging materials</li>
                                        <li>Paint, solvents & fuel</li>
                                        <li>Batteries & electronic waste (e-waste)</li>
                                        <li>Gas cylinders & pressurised containers</li>
                                        <li>Medical & biohazard waste</li>
                                        <li>Food & organic waste</li>
                                        <li>Concrete, soil, bricks & heavy rubble</li>
                                    </ul>
                                    <div><a href="#" className="theme-btn rounded-3">Book Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <FooterCta />
            <Footer />
        </div>
    )
}

export default page
