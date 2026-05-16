"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from '../components/Header';
import SkipBinBooking from '../components/SkipBinBooking';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';
import "../waste-type/style.css";

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
                                    <h1 className="section-title text-white">Waste Type</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Waste Type</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6" id="booking">
                                <SkipBinBooking />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="waste-section bg-white">
                    <div className="container">
                        <div className="text-center wow animate__animated animate__fadeInUp">
                            <div className="section-label">Accepted Waste</div>
                            <h2 className="section-title mt-1">What You Can Put</h2>
                            <p className="text-muted mx-auto" style={{ maxWidth: 520 }}>
                                We accept most household and commercial waste. Some items need special arrangements — check below.
                            </p>
                            <img src='../images/bins-category.png' alt='img' className='wasteCategory mt-md-4 img-fluid wow animate__animated animate__fadeInUp' />
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="waste-col-title green wow animate__animated animate__fadeInUp">
                                    <i className="bi bi-check-circle-fill" /> Generally Accepted
                                </div>
                                <ul className="waste-list list-unstyled">
                                    <li><i className="bi bi-check-circle-fill ok" />General household rubbish</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Green waste &amp; garden waste</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Timber &amp; wood</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Furniture &amp; whitegoods</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Building &amp; demolition waste</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Cardboard &amp; paper</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Metal &amp; scrap</li>
                                    <li><i className="bi bi-check-circle-fill ok" />Soil &amp; sand (heavy bins)</li>
                                </ul>
                            </div>
                            {/* Conditional */}
                            <div className="col-md-4">
                                <div className="waste-col-title blue wow animate__animated animate__fadeInUp">
                                    <i className="bi bi-exclamation-circle-fill" /> Check With Us First
                                </div>
                                <ul className="waste-list list-unstyled">
                                    <li><i className="bi bi-exclamation-triangle-fill maybe" />Tyres (surcharge may apply)</li>
                                    <li><i className="bi bi-exclamation-triangle-fill maybe" />Electronics &amp; e-waste</li>
                                    <li><i className="bi bi-exclamation-triangle-fill maybe" />Mattresses (fee applies)</li>
                                    <li><i className="bi bi-exclamation-triangle-fill maybe" />Plasterboard (segregated)</li>
                                    <li><i className="bi bi-exclamation-triangle-fill maybe" />Commercial food waste</li>
                                    <li><i className="bi bi-exclamation-triangle-fill maybe" />Light excavation materials</li>
                                </ul>
                            </div>
                            {/* Not Accepted */}
                            <div className="col-md-4">
                                <div className="waste-col-title red wow animate__animated animate__fadeInUp">
                                    <i className="bi bi-x-circle-fill" /> Not Accepted
                                </div>
                                <ul className="waste-list list-unstyled">
                                    <li><i className="bi bi-x-circle-fill no" />Asbestos</li>
                                    <li><i className="bi bi-x-circle-fill no" />Liquid waste or oils</li>
                                    <li><i className="bi bi-x-circle-fill no" />Hazardous chemicals</li>
                                    <li><i className="bi bi-x-circle-fill no" />Paint in large quantities</li>
                                    <li><i className="bi bi-x-circle-fill no" />Gas cylinders</li>
                                    <li><i className="bi bi-x-circle-fill no" />Medical / biological waste</li>
                                    <li><i className="bi bi-x-circle-fill no" />Batteries (large)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="waste-facts grayBg py-80" id="waste">
                    <div className="container">
                        <div className="row row-gap-4">
                            <div className="col-lg-5">
                                <div className="factsImages wow animate__animated animate__fadeInUp">
                                    <img src="../images/factsImage.png" alt="fact" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="wow animate__animated animate__fadeInUp">
                                    <div className="section-label">Waste facts</div>
                                    <h2 className="section-title mt-1">Know your waste</h2>
                                </div>
                                <div className="description">
                                    <p>Australia generates over 75 million tonnes of solid waste annually—roughly 2.88 tonnes per capita—with a 58% recycling rate, yet relies heavily on landfills. Key waste streams include construction and demolition 44%, organics 19%, and hazardous materials.</p>

                                    <ul className="list-unstyled listFacts mt-40">
                                        <li>
                                            <span className="Icon"><img src="../images/recycleBin.png" alt="icon" /></span>
                                            <div className="factDes">
                                                <h5>Aluminium recycling saves 95% of energy</h5>
                                                <p>Recycling one aluminium can uses 5% of the energy required to produce one from raw bauxite ore.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="Icon"><img src="../images/shield.png" alt="icon" /></span>
                                            <div className="factDes">
                                                <h5>Tasmania's single-use plastics ban</h5>
                                                <p>Cutlery, plates, straws and polystyrene cups have been phased out in commercial use under DEPHA Tasmania's 2022 reforms.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="Icon"><img src="../images/target.png" alt="icon" /></span>
                                            <div className="factDes">
                                                <h5>Australia's 2030 target — 80% diversion</h5>
                                                <p>The National Waste Policy Action Plan commits Australia to an 80% average resource recovery rate from all waste streams by 2030.</p>
                                            </div>
                                        </li>
                                    </ul>
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
