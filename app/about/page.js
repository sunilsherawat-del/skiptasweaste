"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Image from "next/image";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from '../components/Header';
import SkipBinBooking from '../components/SkipBinBooking';
//import Counter from '../components/Counter';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';
import "../about/style.css";
import FastDelivery from "../../public/Images/fastDelivery.png";
import SameDaypickup from "../../public/Images/sameDaypickup.png";
import LocallTeam from "../../public/Images/choose_list_img3.png";
import EcoFriendly from "../../public/Images/choose_list_img2.png";
import BookOnline from "../../public/Images/choose_list_img1.png";

const page = () => {
  return (
    <div className="pageContent">
        <Header />
        <div className='pageWraper'>
            <section className="innerBaner bannerSection pb-40" style={{ background: "url('../images/skip-banner.jpg') no-repeat center center / cover, rgb(0 0 0 / 60%)",  backgroundBlendMode: "multiply",}}>
                <div className="container">
                    <div className="row align-items-center row-gap-4">
                        <div className="col-lg-6">
                            <div className="title wow animate__animated animate__fadeInUp">
                                <h1 className="section-title text-white">About Us</h1>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                        <div className="col-lg-6" id="booking">
                            <SkipBinBooking />
                        </div>
                    </div>
                </div>
            </section>
        
            <section className="about-section py-80">
                <div className="container">
                <div className="row align-items-center row-gap-4">
                    <div className="col-lg-7 pe-lg-5">
                    <div className="section-label wow animate__animated animate__fadeInUp">About Us</div>
                    <h2 className="section-title mt-1 wow animate__animated animate__fadeInUp">A Tradie Who Loves the Bush</h2>
                    <p className="text-muted mt-3 wow animate__animated animate__fadeInUp">
                        Tassie's Skip was started by a local tradie with a ute, a passion for keeping Tasmania clean,
                        and a serious dislike of fly-tipping. Twelve years later we're still family-owned, still local,
                        and still obsessed with doing things the right way.
                    </p>
                    <p className="text-muted wow animate__animated animate__fadeInUp">
                        We're proud to recycle or responsibly dispose of over 78% of everything that goes into our bins.
                        Because if you love the bush, you look after it.
                    </p>
                    <div className="tradie-badge-strip wow animate__animated animate__fadeInUp">
                        <div className="tradie-badge"><i className="bi bi-shield-check" /> Fully Insured</div>
                        <div className="tradie-badge"><i className="bi bi-recycle" /> 78% Recycled</div>
                        <div className="tradie-badge"><i className="bi bi-house-heart" /> Family Owned</div>
                        <div className="tradie-badge"><i className="bi bi-geo-alt" /> Tasmanian</div>
                    </div>
                    <a href="#how" className="theme-btn rounded-3 mt-4 wow animate__animated animate__fadeInUp">View More <i className="bi bi-arrow-right ms-1" /></a>
                    </div>
                    <div className="col-lg-5">
                        <div className="tradie-img-wrap">
                            <img src="../Images/aboutImg.jpg" alt="" className="img-fluid"  />
                            <div className="exp-badge wow animate__animated animate__fadeInUp">
                            <div className="years">12+</div>
                            <div className="label">Years in Business</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* <div className="grayBg"><Counter /></div> */}
            <section className="choose-section py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className='text-center w-50 m-auto wow animate__animated animate__fadeInUp'>
                            <div className="section-label">Why Choose us</div>
                            <h2 className="section-title mt-1">Why Tasmanians choose us</h2>
                            <p className="text-muted">
                            We're proud to recycle or responsibly dispose of over 78% of everything that goes into our bins.
                            Because if you love the bush, you look after it.
                            </p>
                        </div>
                        <div className='row row-gap-4 mt-40'>
                            <div className='col-12 col-md-6 col-lg-4'>
                            <div className='card cardChoose p-40 rounded-4 wow animate__animated animate__fadeInUp'>
                                <div className='chooseIcon'><Image src={FastDelivery} alt="image" /></div>
                                <h4>Fast Tassie-wide delivery</h4>
                                <p>Hobart, Launceston and the lot. Most drops same-day.</p>
                            </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                            <div className='card cardChoose p-40 rounded-4 wow animate__animated animate__fadeInUp'>
                                <div className='chooseIcon'><Image src={SameDaypickup} alt="image" /></div>
                                <h4>Same-day pickup & dropoff</h4>
                                <p>Booked before 11am? Skip's on your driveway by arvo.</p>
                            </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-4'>
                            <div className='card cardChoose p-40 rounded-4 wow animate__animated animate__fadeInUp text-center text-lg-start'>
                                <div className='chooseIcon'><Image src={LocallTeam} alt="image" /></div>
                                <h4>Locally owned & operated</h4>
                                <p>Family-run since 2014 from a yard in Glenorchy.</p>
                            </div>
                            </div>
                        </div>
                        <div className='row mt-4 cardChooseL row-gap-4'>
                            <div className='col-12 col-md-6 col-lg-6'>
                            <div className='card cardChoose p-40 rounded-4 wow animate__animated animate__fadeInUp'>
                                <div className='chooseIcon'><Image src={EcoFriendly} alt="image" /></div>
                                <div>
                                <h4>Responsible, eco-friendly disposal</h4>
                                <p>Up to 80% of every load is sorted and recycled.</p>
                                </div>
                            </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'>
                            <div className='card cardChoose p-40 rounded-4 wow animate__animated animate__fadeInUp'>
                                <div className='chooseIcon'><Image src={BookOnline} alt="image" /></div>
                                <div>
                                <h4>Book online in under a minute</h4>
                                <p>Three quick steps. Pay later. We'll text confirmation.</p>
                                </div>
                            </div>
                            </div>
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
