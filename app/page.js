"use client";

import { useEffect, useState } from "react";
import Header from './components/Header';
import Typewriter from './components/Typewriter';
import SkipBinBooking from './components/SkipBinBooking';
import Counter from './components/Counter';
import CoverageCity from './components/CoverageCity';
import FooterCta from './components/FooterCta';
import Footer from './components/Footer';
import Wow from "./components/Wow"

import Accordion from 'react-bootstrap/Accordion';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

import ChooseImg from "../public/Images/chooseImg.webp";
import mapIcon from "../public/Images/map.png";
import wasteIcon from "../public/Images/waste-bin.png";
import recyclingIcon from "../public/Images/recycling-bin.png";
import calendarIcon from "../public/Images/calendar.png";
import Aboutimg from "../public/Images/aboutImg.jpg";
import FastDelivery from "../public/Images/fastDelivery.png";
import SameDaypickup from "../public/Images/sameDaypickup.png";
import LocallTeam from "../public/Images/choose_list_img3.png";
import EcoFriendly from "../public/Images/choose_list_img2.png";
import BookOnline from "../public/Images/choose_list_img1.png";

export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation values
  const scale = 1.05 + scrollY * 0.0005;
  const opacity = Math.max(0.15, 0.2 - scrollY * 0.0004);

  const blogData = [
    {
      category: "Tips & Guides",
      title: "How to Choose the Right Skip Bin Size for Your Renovation",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "3 May 2025",
      read: "4 min read",
      icon: "bi-calendar-check",
      link: "/blog-detail",
    },
    {
      category: "Sustainability",
      title: "Does Stuff Actually Get Recycled When You Hire a Skip Bin?",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "18 Apr 2025",
      read: "5 min read",
      icon: "bi-recycle",
      link: "/blog-detail",
    },
    {
      category: "Tradie Tips",
      title: "3 Time-Saving Tips When Booking a Skip for a Building Job",
      paragraph: "Picking between a 4m³ and 6m³? Here's a quick way to estimate before you book.",
      date: "2 Apr 2025",
      read: "3 min read",
      icon: "bi-tools",
      link: "/blog-detail",
    },
  ];

  return (
    <div className="pageContent">
      <Wow />
      <Header />
      <div className='pageWraper'>
        <section className="hero bannerSection" id="home">
          <div
            className="BgOverlay"
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
            }}
          />
          <div className="container position-relative z-index">
            <div className="row align-items-center row-gap-4">
              <div className="col-lg-6">
                <div className="hero-badge wow animate__animated animate__fadeInUp"><i className="bi bi-award-fill me-1" /> Tasmania's #1 Skip Bin Provider</div>
                <h1>Skip Bin Hire<br /> Made Simple <Typewriter /></h1>
                <p className="lead">Affordable, reliable, and eco-friendly skip bin hire for homes, tradies, and
                  businesses across the Apple Isle.</p>
                <div className="d-flex gap-3 flex-wrap wow animate__animated animate__fadeInUp">
                  <a href="#bins" className="theme-btn rounded-3">
                    Choose a Bin <i className="bi bi-arrow-down ms-1" />
                  </a>
                  <a href="#how" className="theme-btn bg-white rounded-3">
                    <i className="bi bi-play-circle me-1" /> How It Works
                  </a>
                </div>
              </div>
              <div className="col-lg-6" id="booking">
                <SkipBinBooking />
              </div>
            </div>
          </div>
          <div className="truck-animation">
            <img className="truckIcon" src="/Images/garbage-truck.png" alt="truck" />
            {/* <img className="trashBag" src="/Images/trash-bag.png" alt="truck" /> */}
          </div>
        </section>

        <Counter />

        <section className="bins-section" id="bins">
          <div className="container">
            <div className="text-center mb-5 wow animate__animated animate__fadeInUp">
              <div className="section-label">Our Bin Size</div>
              <h2 className="section-title mt-1">Choose Your Bin Size</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: 540 }}>
                From small clean-ups to full demolition sites — we have the right bin for every job. All prices
                include delivery, pick-up, and eco disposal.
              </p>
            </div>
            <div className="row g-4">
              {/* Bin 1 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">2m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Small Clean-Up</div>
                    <div className="bin-desc">Perfect for small garden or household cleans</div>
                    <div className="bin-price">$190 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />1.2m L × 1.2m W × 1.4m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–7 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 2 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">3m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Garage Tip</div>
                    <div className="bin-desc">Great for garage clear-outs and small renos</div>
                    <div className="bin-price">$249 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />1.8m L × 1.2m W × 1.4m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–7 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 3 – Featured */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card featured position-relative wow animate__animated animate__fadeInUp">
                  <div className="position-absolute top-0 end-0 m-2 tag-index">
                    <span className="tag-pill tag-red"><i className="bi bi-star-fill me-1" />Most Popular</span>
                  </div>
                  <div className="bin-card-img" style={{ background: '#ffecba' }}>
                    <div className="bin-size-badge">4m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Standard Skip</div>
                    <div className="bin-desc">Our most popular size — suits most jobs</div>
                    <div className="bin-price">$299 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />2.4m L × 1.2m W × 1.4m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–7 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 4 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">6m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Large Bin</div>
                    <div className="bin-desc">Ideal for renovations and big landscaping jobs</div>
                    <div className="bin-price">$385 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />3.1m L × 1.5m W × 1.5m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–7 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 5 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">8m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">XL Bin</div>
                    <div className="bin-desc">For construction, commercial, or major cleanouts</div>
                    <div className="bin-price">$460 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />3.7m L × 1.5m W × 1.8m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–14 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 6 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">10m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Maxi Bin</div>
                    <div className="bin-desc">Maximum capacity for industrial &amp; demolition</div>
                    <div className="bin-price">$545 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />4.6m L × 1.5m W × 2.0m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–14 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 7 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">10m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Maxi Bin</div>
                    <div className="bin-desc">Maximum capacity for industrial &amp; demolition</div>
                    <div className="bin-price">$545 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />4.6m L × 1.5m W × 2.0m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–14 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
              {/* Bin 8 */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="bin-card wow animate__animated animate__fadeInUp">
                  <div className="bin-card-img">
                    <div className="bin-size-badge">10m³</div>
                    <img src='../images/skipbin_img.png' alt='image' />
                  </div>
                  <div className="bin-card-body">
                    <div className="bin-name">Maxi Bin</div>
                    <div className="bin-desc">Maximum capacity for industrial &amp; demolition</div>
                    <div className="bin-price">$545 <span>inc. GST</span></div>
                    <div className="bin-specs">
                      <i className="bi bi-rulers" />4.6m L × 1.5m W × 2.0m H&nbsp;&nbsp;
                      <i className="bi bi-clock" /> 3–14 day hire
                    </div>
                    <a href="#booking" className="theme-btn rounded-3 justify-content-center btn-sm w-100">Book Now</a>
                  </div>
                </div>
              </div>
            </div>{/* /row */}
          </div>
        </section>

        <section className="how-section" id="how">
          <div className="container position-relative">
            <div className="text-center mb-80 wow animate__animated animate__fadeInUp">
              <div className="section-label text-white">Simple Process</div>
              <h2 className="section-title mt-1 text-white">How It Works — No Worries</h2>
              <p style={{ maxWidth: 500, margin: '0 auto' }}>
                Book online or by phone. We'll handle everything else so you can focus on the job.
              </p>
            </div>
            <div className="row align-items-center row-gap-4">
              <div className='col-12 col-lg-6'>
                <div className='ImgBox chooseImg wow animate__animated animate__fadeInUp'>
                  <Image src={ChooseImg} alt="image" className="img-fluid" />
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className="how-split__steps">
                  <div className="steps-rail steps-rail--compact">
                    <div className="steps-rail__line" />
                    <div className="rail-step wow animate__animated animate__fadeInUp">
                      <div className="rail-step__node"><span className="rail-step__num">01</span></div>
                      <div className="rail-step__card">
                        <div className="rail-step__ico">
                          <Image src={mapIcon} alt="image" />
                        </div>
                        <div className="rail-step__body">
                          <h3>Enter postcode</h3>
                          <p>Tell us where the skip's headed. We service 30+ Tassie suburbs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rail-step wow animate__animated animate__fadeInUp">
                      <div className="rail-step__node"><span className="rail-step__num">02</span></div>
                      <div className="rail-step__card">
                        <div className="rail-step__ico">
                          <Image src={wasteIcon} alt="image" />
                        </div>
                        <div className="rail-step__body">
                          <h3>Pick waste type</h3>
                          <p>General, green, building or heavy mixed — we sort the rest.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rail-step wow animate__animated animate__fadeInUp">
                      <div className="rail-step__node"><span className="rail-step__num">03</span></div>
                      <div className="rail-step__card">
                        <div className="rail-step__ico">
                          <Image src={recyclingIcon} alt="image" />
                        </div>
                        <div className="rail-step__body">
                          <h3>Choose bin size</h3>
                          <p>From 2m³ to 8m³. Not sure? Our team will help you nail it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rail-step wow animate__animated animate__fadeInUp">
                      <div className="rail-step__node"><span className="rail-step__num">04</span></div>
                      <div className="rail-step__card">
                        <div className="rail-step__ico">
                          <Image src={calendarIcon} alt="image" />
                        </div>
                        <div className="rail-step__body">
                          <h3>Pick dates &amp; price</h3>
                          <p>Lock in delivery and pick-up arvos that suit. Pay flat — done.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <Image src={Aboutimg} alt="image" className="wow animate__animated animate__fadeInUp" />
                  <div className="exp-badge wow animate__animated animate__fadeInUp">
                    <div className="years">12+</div>
                    <div className="label">Years in Business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="choose-section grayBg py-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className='text-center w-50 m-auto wow animate__animated animate__fadeInUp'>
                  <div className="section-label">Choose us</div>
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

        <section className="map-section" style={{ background: 'rgb(0 0 0 / 60%) url(../images/acrossCity.jpg) no-repeat center center / cover', backgroundAttachment: 'fixed', backgroundBlendMode: 'Overlay', }}>
          <div className="container">
            <div className="text-center mb-5 wow animate__animated animate__fadeInUp">
              <div className="section-label text-white">Coverage</div>
              <h2 className="section-title mt-1 text-white">We Deliver Across Tasmania</h2>
              <p className="text-white mx-auto" style={{ maxWidth: 520 }}>
                From Hobart to Launceston, Devonport to the East Coast — if it's in Tassie, we can get there.
              </p>
            </div>
            <CoverageCity />
          </div>
        </section>

        <section className="waste-section" id="waste">
          <div className="container">
            <div className="text-center wow animate__animated animate__fadeInUp">
              <div className="section-label">Accepted Waste</div>
              <h2 className="section-title mt-1">What Goes In the Skip?</h2>
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

        <section className="blog-section">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2 wow animate__animated animate__fadeInUp">
              <div>
                <div className="section-label">Article</div>
                <h2 className="section-title mt-1">Latest Blog &amp; News</h2>
              </div>
              <a href="#" className="theme-btn btn-outline-green">View All <i className="bi bi-arrow-right ms-1" /></a>
            </div>
            <div className="row g-4">
              <div className="col-md-12 wow animate__animated animate__fadeInUp">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    481: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {blogData.map((blog, index) => (
                    <SwiperSlide key={index}>
                      <div className="blog-card">
                        <div className="blog-img">
                          <img src="../images/skipbin_img.png" alt="blog" />
                        </div>

                        <div className="blog-body">
                          <div className="blog-meta mb-3">
                            <i className="bi bi-calendar3 me-1" />
                            {blog.date} &nbsp;·&nbsp; {blog.read}
                          </div>

                          <div className="blog-cat">{blog.category}</div>
                          <div className="blog-title">{blog.title}</div>
                          <div className="blog-description">{blog.paragraph}</div>
                          <Link href={blog.link} className="theme-btn rounded-3 mt-4 btn-sm">Read More <i className="bi bi-arrow-right"></i></Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="faq grayBg py-80">
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

        <section className="waste-facts my-80" id="waste">
          <div className="container">
            <div className="text-center wow animate__animated animate__fadeInUp mb-80">
              <div className="section-label">Waste facts</div>
              <h2 className="section-title mt-1">Know your waste</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: 520 }}>
                We accept most household and commercial waste. Some items need special arrangements — check below.
              </p>
            </div>
            <div className="row row-gap-4">
              <div className="col-lg-5">
                <div className="factsImages wow animate__animated animate__fadeInUp">
                  <img src="../images/factsImage.png" alt="fact" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
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
  );
};