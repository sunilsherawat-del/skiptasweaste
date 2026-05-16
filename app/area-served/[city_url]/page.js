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

import Accordion from 'react-bootstrap/Accordion';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../../area-served/area.css";

const page = () => {

    const sizeData = [
        {
            Image: "/images/skipbin_img.png",
            title: "2 Cubic Meter Skip Bin",
            paragraph: "Perfect for small-scale clean-ups, our 2m³ skip is ideal for garden waste, minor renovations or spring cleaning. Compact design makes it easy to place on driveways or in tight spaces.",
        },
        {
            Image: "/images/skipbin_img.png",
            title: "3 Cubic Meter Skip Bin",
            paragraph: "Perfect for small-scale clean-ups, our 2m³ skip is ideal for garden waste, minor renovations or spring cleaning. Compact design makes it easy to place on driveways or in tight spaces.",
        },
        {
            Image: "/images/skipbin_img.png",
            title: "4 Cubic Meter Skip Bin",
            paragraph: "Perfect for small-scale clean-ups, our 2m³ skip is ideal for garden waste, minor renovations or spring cleaning. Compact design makes it easy to place on driveways or in tight spaces.",
        },
        {
            Image: "/images/skipbin_img.png",
            title: "5 Cubic Meter Skip Bin",
            paragraph: "Perfect for small-scale clean-ups, our 2m³ skip is ideal for garden waste, minor renovations or spring cleaning. Compact design makes it easy to place on driveways or in tight spaces.",
        },
        {
            Image: "/images/skipbin_img.png",
            title: "6 Cubic Meter Skip Bin",
            paragraph: "Perfect for small-scale clean-ups, our 2m³ skip is ideal for garden waste, minor renovations or spring cleaning. Compact design makes it easy to place on driveways or in tight spaces.",
        },
    ];

    return (
        <div className="pageContent">
            <Header />
            <div className='pageWraper'>
                <section className="innerBaner bannerSection pb-40" style={{ background: "url('../images/skip-banner.jpg') no-repeat center center / cover, rgb(0 0 0 / 60%)", backgroundBlendMode: "multiply", }}>
                    <div className="container">
                        <div className="row align-items-center row-gap-4">
                            <div className="col-lg-6">
                                <div className="title wow animate__animated animate__fadeInUp">
                                    <h1 className="section-title text-white">Hobart</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item href="#">Hobart</Breadcrumb.Item>
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
                            <div className="section-label">Budget Friendly</div>
                            <h2 className="section-title mt-1 m-auto" style={{ maxWidth: 700 }}>Under Budget Friendly Waste Removal Solution in Hobart</h2>
                            <p className="mx-auto" style={{ maxWidth: 520 }}>
                                From Hobart to Launceston, Devonport to the East Coast — if it's in Tassie, we can get there.
                            </p>
                        </div>
                        <div className="row row-gap-4 align-items-center">
                            <div className="col-12 col-lg-6">
                                <div className="imgBx wow animate__animated animate__fadeInUp">
                                    <img src="../images/aboutImg.jpg" alt="Img" className="img-fluid rounded-3" height={400} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="description wow animate__animated animate__fadeInUp">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="waste-section grayBg swiperSlider">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-lg-7">
                                <div className="wow animate__animated animate__fadeInUp">
                                    <div className="section-label">Accepted Waste Type</div>
                                    <h2 className="section-title mt-1">Accepted and Non-Accepted Waste Types by Our Team in Hobart</h2>
                                    <p className="text-muted">
                                        We think that a clean and neat space is important for both your safety and health. This is why we accept trash from different types of projects. Whether you are taking a regular house and garden cleanup or weekend deep cleaning, tackling a construction or commercial site or organising an event or social gathering, you can hire our bins to remove waste in a simple move. We accept waste, including furniture, wood, metal, plastic, paper, and non electrical items. You can also put heavy waste like bricks, concrete, soil and rubble in our skip bins, while some unsafe waste like asbestos, batteries, clinical waste, tyres, paints, gas cylinders, food waste, chemicals, wires, phones and other items are not allowed in our skip bins. Book our rubbish removal in Hobart and let us handle your stress and give you peace of mind.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 d-none d-lg-block">
                                <div className="binBx bg-white rounded-4 p-4 text-center wow animate__animated animate__fadeInUp">
                                    <img src="../images/acceptedBin.svg" alt="Img" className="img-fluid" style={{ maxHeight: '400px' }} />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-40">
                            <div className="col-12">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    navigation
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1199: { slidesPerView: 3 },
                                    }}
                                    className="service-slider arrow-top wow fadeInLeft"
                                >
                                    {/* Slide 1 */}
                                    <SwiperSlide>
                                        <div className="service-item">
                                            <div className="imgService">
                                                <img src="../images/generalWaste.jpg" alt="service" className="img-fluid" />
                                            </div>
                                            <div className="title mb-3 px-3">
                                                <h3>General Waste</h3>
                                                <p>suitable for light domestic and commercial waste</p>
                                            </div>

                                            <div className="service_list px-3">
                                                <h6>What you put in:</h6>
                                                <ul className="list-unstyled count-2 mb-0 put-list">
                                                    <li>Light domestic waste</li>
                                                    <li>Non-hazardous waste</li>
                                                    <li>Light construction waste</li>
                                                    <li>Office Waste</li>
                                                    <li>Office Waste</li>
                                                    <li>Office Waste</li>
                                                </ul>
                                            </div>

                                            <div className="service_list mt-4 px-3">
                                                <h6>What you can’t put in:</h6>
                                                <ul className="list-unstyled count-2 mb-0 put-list no-put-list">
                                                    <li>Hazardous waste like asbestos</li>
                                                    <li>Liquid waste</li>
                                                    <li>Food waste</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 2 */}
                                    <SwiperSlide>
                                        <div className="service-item">
                                            <div className="imgService">
                                                <img src="../images/greenWaste.jpg" alt="service" className="img-fluid" />
                                            </div>
                                            <div className="title mb-3 px-3">
                                                <h3>Green Waste</h3>
                                                <p>Price based STRICTLY on cleanfill only</p>
                                            </div>

                                            <div className="service_list px-3">
                                                <h6>What you put in:</h6>
                                                <ul className="list-unstyled count-2 mb-0 put-list">
                                                    <li>Grass</li>
                                                    <li>Leaves</li>
                                                    <li>Tree trimmings</li>
                                                    <li>Small branches</li>
                                                    <li>Weed</li>
                                                    <li>Bark</li>
                                                </ul>
                                            </div>

                                            <div className="service_list mt-4 px-3">
                                                <h6>What you can’t put in:</h6>
                                                <ul className="list-unstyled count-2 mb-0 put-list no-put-list">
                                                    <li>General waste</li>
                                                    <li>Food waste</li>
                                                    <li>Tree stumps</li>
                                                    <li>Soil</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 3 */}
                                    <SwiperSlide>
                                        <div className="service-item">
                                            <div className="imgService">
                                                <img src="../images/mixedWaste.jpg" alt="service" className="img-fluid" />
                                            </div>
                                            <div className="title mb-3 px-3">
                                                <h3>Mixed waste</h3>
                                                <p>Price based STRICTLY on cleanfill only</p>
                                            </div>

                                            <div className="service_list px-3">
                                                <h6>What you put in:</h6>
                                                <ul className="list-unstyled count-2 mb-0 put-list">
                                                    <li>Grass</li>
                                                    <li>Leaves</li>
                                                    <li>Tree trimmings</li>
                                                    <li>Small branches</li>
                                                    <li>Weed</li>
                                                    <li>Bark</li>
                                                </ul>
                                            </div>

                                            <div className="service_list mt-4 px-3">
                                                <h6>What you can’t put in:</h6>
                                                <ul className="list-unstyled count-2 mb-0 put-list no-put-list">
                                                    <li>General waste</li>
                                                    <li>Food waste</li>
                                                    <li>Tree stumps</li>
                                                    <li>Soil</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="binSize swiperSlider my-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-11">
                                <div className="text-center wow animate__animated animate__fadeInUp">
                                    <div className="section-label">Bin size</div>
                                    <h2 className="section-title mt-1">Skip Bin Sizes Offered</h2>
                                    <p className="text-muted">
                                        We think that a clean and neat space is important for both your safety and health. This is why we accept trash from different types of projects. Whether you are taking a regular house and garden cleanup or weekend deep cleaning, tackling a construction or commercial site or organising an event or social gathering, you can hire our bins to remove waste in a simple move. We accept waste, including furniture, wood, metal, plastic, paper, and non electrical items. You can also put heavy waste like bricks, concrete, soil and rubble in our skip bins, while some unsafe waste like asbestos, batteries, clinical waste, tyres, paints, gas cylinders, food waste, chemicals, wires, phones and other items are not allowed in our skip bins. Book our rubbish removal in Hobart and let us handle your stress and give you peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row row-gap-4 mt-40">
                            <div className="col-md-12 wow animate__animated animate__fadeInUp">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={2}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        992: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                    {sizeData.map((bins, index) => (
                                        <SwiperSlide key={index}>

                                            <div className="bin-card">
                                                <div className="bin-card-img orangeLightBg">
                                                    <img src="../images/skipbin_img.png" alt="blog" />
                                                </div>

                                                <div className="bin-card-body">
                                                    <div className="bin-name">{bins.title}</div>
                                                    <div className="bin-desc">{bins.paragraph}</div>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq grayBg py-80 mb-5">
                    <div className="container">
                        <div className="title mb-40 text-center wow animate__animated animate__fadeInDown">
                            <div className="section-label">FAQ</div>
                            <h2 className="section-title mt-1">Everything You Need to Know?</h2>
                        </div>
                        <div className="row row-gap-4 justify-content-between">
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div className="faq_left wow animate__animated animate__fadeInDown" style={{ background: 'url(../images/faq_bg.png) no-repeat center center / cover' }}>
                                    <h3 className="text-white">Still have a questions?</h3>
                                    <p className="text-white">Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!</p>
                                    <a href="#" className="theme-btn bg-white btn rounded-3 mt-4">Chat with us</a>
                                    <img src="../images/faqIcon.gif" alt="img" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="faq-sect wow animate__animated animate__fadeInDown">
                                    <Accordion defaultActiveKey="0" id="faq">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What should I wear?</Accordion.Header>
                                            <Accordion.Body>
                                                This is your time. Some clients prefer quiet meditation, others find sharing helpful. Feel free to communicate pressure preferences or needs, or simply relax in silence. We follow your lead.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Can I talk during my treatment?</Accordion.Header>
                                            <Accordion.Body>
                                                This is your time. Some clients prefer quiet meditation, others find sharing helpful. Feel free to communicate pressure preferences or needs, or simply relax in silence. We follow your lead.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How is this different from Remedial Massage?</Accordion.Header>
                                            <Accordion.Body>
                                                This is your time. Some clients prefer quiet meditation, others find sharing helpful. Feel free to communicate pressure preferences or needs, or simply relax in silence. We follow your lead.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Is it suitable during pregnancy?</Accordion.Header>
                                            <Accordion.Body>
                                                This is your time. Some clients prefer quiet meditation, others find sharing helpful. Feel free to communicate pressure preferences or needs, or simply relax in silence. We follow your lead.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>How often should I come?</Accordion.Header>
                                            <Accordion.Body>
                                                This is your time. Some clients prefer quiet meditation, others find sharing helpful. Feel free to communicate pressure preferences or needs, or simply relax in silence. We follow your lead.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
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
