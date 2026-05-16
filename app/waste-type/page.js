"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from '../components/Header';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';

import dynamic from "next/dynamic";

const SkipBinBooking = dynamic(
    () => import("../components/SkipBinBooking"),
    { ssr: false }
);

import "../waste-type/style.css";
import Link from "next/link";

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

                <section className="waste-section bg-white pb-4">
                    <div className="container">
                        <div className="text-center wow animate__animated animate__fadeInUp mb-40">
                            <div className="section-label">Accepted Waste</div>
                            <h2 className="section-title mt-1">What Goes In the Skip?</h2>
                            <p className="text-muted mx-auto" style={{ maxWidth: 520 }}>
                                We accept most household and commercial waste. Some items need special arrangements — check below.
                            </p>
                        </div>
                        <div className="row row-gap-4">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="service-item">
                                    <div className="imgService">
                                        <img src="../images/generalWaste.jpg" alt="service" className="img-fluid" />
                                    </div>
                                    <div className="title mb-3 px-3">
                                        <h3>General Waste</h3>
                                        <p>Accepting the general waste including light domestic waste from home and offices that are permitted in general waste skip bins</p>
                                        <Link href="waste-type/general-waste" className="theme-btn rounded-3">View More <i class="bi bi-arrow-right-short"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="service-item">
                                    <div className="imgService">
                                        <img src="../images/greenWaste.jpg" alt="service" className="img-fluid" />
                                    </div>
                                    <div className="title mb-3 px-3">
                                        <h3>Green Waste</h3>
                                        <p>Waste with 100% green waste that includes small trees, branches, shrubs, grass, grass clippings, wings, and palm fronds</p>
                                        <Link href="waste-type/general-waste" className="theme-btn rounded-3">View More <i class="bi bi-arrow-right-short"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="service-item">
                                    <div className="imgService">
                                        <img src="../images/mixedWaste.jpg" alt="service" className="img-fluid" />
                                    </div>
                                    <div className="title mb-3 px-3">
                                        <h3>Mixed Waste</h3>
                                        <p>Which means by hiring our skip bin Brisbane services, you help in making a cleaner and greener future.</p>
                                        <Link href="waste-type/general-waste" className="theme-btn rounded-3">View More <i class="bi bi-arrow-right-short"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="service-item">
                                    <div className="imgService">
                                        <img src="../images/mixedWaste.jpg" alt="service" className="img-fluid" />
                                    </div>
                                    <div className="title mb-3 px-3">
                                        <h3>Soil & Dirt</h3>
                                        <p>Which means by hiring our skip bin Brisbane services, you help in making a cleaner and greener future.</p>
                                        <Link href="waste-type/general-waste" className="theme-btn rounded-3">View More <i class="bi bi-arrow-right-short"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-8">
                                <div className="py-40 rounded-4 h-sm-100 pb-md-0 overflow-hidden d-sm-flex justify-content-between" style={{background:'#0078d6 url(/images/ctaBg_img2.jpg) no-repeat center center / cover', backgroundBlendMode:'luminosity'}}>
                                    <div className="cta_caption px-3 px-lg-4">
                                        <h2>Need a Bin? Get a Quick Quote in Minutes.</h2>
                                        <p>Hire a skip bin with Affordable Skips Bins for affordable, hassle-free service.</p>
                                        <div className="btn_group d-flex align-items-center gap-3 mt-40">
                                            <a href="#" className="theme-btn rounded-3">Book Now</a>
                                        </div>
                                    </div>
                                    <div className="d-flex h-sm-100 align-items-end cta2_img text-end ms-auto">
                                        <img src="/images/ctaImageBin.png" alt="bin container" style={{width:"350px", height:"fit-content"}} className="img-fluid ms-auto d-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="mb-60 mt-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th style={{ backgroundColor: '#e6e6e6' }}>Waste Type</th>
                                                <th style={{ backgroundColor: '#59b234', color: '#fff' }}><i aria-hidden="true" className="fas fa-check" /> Acceptable Items</th>
                                                <th style={{ backgroundColor: '#ffbc00' }}><i aria-hidden="true" className="rt-elementor-icon icon-cancel" /> Non-Acceptable Items</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Green Waste</td>
                                                <td>
                                                    Tree stumps and logs, grass and flower cuttings, soil and turf, vegetable trimmings and vines and hedge trimmings, dried leaves
                                                </td>
                                                <td>
                                                    Non-organic things like plastic and metals, large wood and branches, concrete, animal waste and flower pots, combustible
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>General Waste</td>
                                                <td>
                                                    Plastic waste, paper waste, tins and metals, ceramics and glass, organic waste, coffee cups or lids, plastic packaging, food wrappers, and cling film
                                                </td>
                                                <td>
                                                    No building materials, recyclables, garden organics, and Hazardous wastes like flammable, toxic, corrosive, and reactive wastes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Concrete / Bricks</td>
                                                <td>
                                                    Concrete, bricks or rubber waste, general construction wastes or devastation, soils, clean fills, crusher dust, scalps, roof tiles, bricks, pavers, and ceramic wall tiles
                                                </td>
                                                <td>
                                                    Contaminated soil, green rubbish, grass, lead paint, and asbestos
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Heavy Waste</td>
                                                <td>
                                                    landscaping wastes, builders’ wastes, furniture and appliances, timber, metal and steel, bricks, tiles, and steel
                                                </td>
                                                <td>
                                                    Liquid or hazardous wastes, sand, soil, clay or dirt, food wastes or products
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
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
