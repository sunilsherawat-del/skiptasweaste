"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';

import dynamic from "next/dynamic";

const SkipBinBooking = dynamic(
  () => import("../components/SkipBinBooking"),
  { ssr: false }
);

import "../contact/style.css";
import Link from "next/link";

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
                                    <h1 className="section-title text-white">Contact Us</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6" id="booking">
                                <SkipBinBooking />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact my-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6">
                                <div className="title wow fadeInDown text-center m-auto">
                                    <h2 className="section-title">Contact Us</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-60">
                            <div className="col-12 col-lg-10">
                                <div className="contact_bx">
                                    <div className="contact_info">
                                        <div className="row row-gap-5">
                                            <div className="col-12 col-md-4">
                                                <div className="contact_infoBx">
                                                    <span className="icon"><img src="../images/phone-call.png" alt="call" /></span>
                                                    <h4>Call Us Now</h4>
                                                    <Link href="tel:0123456789">(012) 345 6789</Link><br />
                                                    <Link href="tel:0098765432">00 98 765 432</Link>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="contact_infoBx">
                                                    <span className="icon"><img src="../images/email-icon.png" alt="call" /></span>
                                                    <h4>Email Address</h4>
                                                    <Link href="tel:abc@demo.com">abc@demo.com</Link><br />
                                                    <Link href="tel:abc@demo.com">abc@demo.com</Link>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="contact_infoBx">
                                                    <span className="icon"><img src="../images/location-icon.png" alt="call" /></span>
                                                    <h4>Location</h4>
                                                    <address>Lorem ipsum dolor sit <br /> amet, consectetur</address>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contactForm">
                                        <div className="title text-center">
                                            <h3>Get In Touch</h3>
                                        </div>
                                        <form className="contact-form row g-3 wow fadeInDown" action>
                                            <div className="col-12">
                                                <FloatingLabel controlId="floatingName" label="Your Name" >
                                                    <Form.Control type="text" placeholder="Your Name" />
                                                </FloatingLabel>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <FloatingLabel controlId="floatingEmail" label="Your Email" >
                                                    <Form.Control type="text" placeholder="Your Email" />
                                                </FloatingLabel>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <FloatingLabel controlId="floatingNumber" label="Your Number" >
                                                    <Form.Control type="text" placeholder="Your Number" />
                                                </FloatingLabel>
                                            </div>
                                            <div className="col-12">
                                                <FloatingLabel controlId="floatingTextarea" label="Comments">
                                                    <Form.Control
                                                    as="textarea"
                                                    placeholder="Write Message"
                                                    style={{ height: '100px' }}
                                                    />
                                                </FloatingLabel>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="theme-btn rounded-3">Submit</button>
                                            </div>
                                        </form>
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
