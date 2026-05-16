"use client";

import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from '../components/Header';
import SkipBinBooking from '../components/SkipBinBooking';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';
import "../blog/style.css";

const page = () => {
     const blogData = [
    {
      Image: "/images/skipbin_img.png",
      category: "Tips & Guides",
      title: "How to Choose the Right Skip Bin Size for Your Renovation",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "3 May 2025",
      read: "4 min read",
      icon: "bi-calendar-check",
      url: "tips-guides",
    },
    {
      Image: "/images/skipbin_img.png",
      category: "Sustainability",
      title: "Does Stuff Actually Get Recycled When You Hire a Skip Bin?",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "18 Apr 2025",
      read: "5 min read",
      icon: "bi-recycle",
      url: "/blog-detail",
    },
    {
      Image: "/images/skipbin_img.png",
      category: "Tradie Tips",
      title: "3 Time-Saving Tips When Booking a Skip for a Building Job",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "2 Apr 2025",
      read: "3 min read",
      icon: "bi-tools",
      url: "/blog-detail",
    },
    {
      Image: "/images/skipbin_img.png",
      category: "Tradie Tips",
      title: "3 Time-Saving Tips When Booking a Skip for a Building Job",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "2 Apr 2025",
      read: "3 min read",
      icon: "bi-tools",
      url: "/blog-detail",
    },
    {
      Image: "/images/skipbin_img.png",
      category: "Tradie Tips",
      title: "3 Time-Saving Tips When Booking a Skip for a Building Job",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "2 Apr 2025",
      read: "3 min read",
      icon: "bi-tools",
      url: "/blog-detail",
    },
    {
      Image: "/images/skipbin_img.png",
      category: "Tradie Tips",
      title: "3 Time-Saving Tips When Booking a Skip for a Building Job",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "2 Apr 2025",
      read: "3 min read",
      icon: "bi-tools",
      url: "/blog-detail",
    },
  ];
    return (
        <div className="pageContent">
            <Header />
            <div className='pageWraper'>
                <section className="innerBaner bannerSection pb-40" style={{ background: "url('../images/skip-banner.jpg') no-repeat center center / cover, rgb(0 0 0 / 60%)",  backgroundBlendMode: "multiply",}}>
                    <div className="container">
                        <div className="row align-items-center row-gap-4">
                            <div className="col-lg-6">
                                <div className="title wow animate__animated animate__fadeInUp">
                                    <h1 className="section-title text-white">Blogs</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="col-lg-6" id="booking">
                                <SkipBinBooking />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog my-80">
                    <div className="container">
                        <div className="row row-gap-4">
                            {blogData.map((blog, index) => (
                                <div className="col-12 col-md-6 col-lg-4" key={index}>
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <img src={blog.Image} alt="blog" />
                                        </div>

                                        <div className="blog-body">
                                            <div className="blog-meta mb-3">
                                                <i className="bi bi-calendar3 me-1" />
                                                {blog.date} &nbsp;·&nbsp; {blog.read}
                                            </div>

                                            <div className="blog-cat">{blog.category}</div>
                                            <div className="blog-title">{blog.title}</div>
                                            <div className="blog-description">{blog.paragraph}</div>
                                            <Link href={`/blog/${blog.url}`} className="theme-btn rounded-3 mt-4 btn-sm">Read More <i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
