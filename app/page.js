"use client";
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Typewriter from './components/Typewriter/Typewriter';
import SkipBinBooking from './components/BookingForm/SkipBinBooking';
import Counter from './components/CounterStrip/Counter';
import Image from "next/image";
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
import CoverageCity from './components/CoverageArea/CoverageCity';
import BlogSwiper from './components/Blog/BlogSwiper';
import FaqSection from './components/Faq/Faq';
import FooterCta from './components/FooterCta/FooterCta';
import Footer from './components/Footer/Footer';


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

  return (
  <div className="pageContent">
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
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-badge"><i className="bi bi-award-fill me-1" /> Tasmania's #1 Skip Bin Provider</div>
              <h1>Skip Bin Hire<br /> Made Simple <Typewriter /></h1>
              <p className="lead">Affordable, reliable, and eco-friendly skip bin hire for homes, tradies, and
                businesses across the Apple Isle.</p>
              <div className="d-flex gap-3 flex-wrap">
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
          <div className="text-center mb-5">
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
              <div className="bin-card">
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
              <div className="bin-card">
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
              <div className="bin-card featured position-relative">
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
              <div className="bin-card">
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
              <div className="bin-card">
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
              <div className="bin-card">
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
              <div className="bin-card">
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
              <div className="bin-card">
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
          <div className="text-center mb-80">
            <div className="section-label text-white">Simple Process</div>
            <h2 className="section-title mt-1 text-white">How It Works — No Worries</h2>
            <p style={{ maxWidth: 500, margin: '0 auto' }}>
              Book online or by phone. We'll handle everything else so you can focus on the job.
            </p>
          </div>
          <div className="row g-4 align-items-center row-gap-4">
            <div className='col-12 col-lg-6'>
              <div className='ImgBox chooseImg'>
                <Image src={ChooseImg} alt="image" />
              </div>
            </div>
            <div className='col-12 col-lg-6'>
                <div className="how-split__steps">
                  <div className="steps-rail steps-rail--compact">
                    <div className="steps-rail__line" />
                    <div className="rail-step">
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
                    <div className="rail-step">
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
                    <div className="rail-step">
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
                    <div className="rail-step">
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

      <section className="tradie-section">
        <div className="container">
          <div className="row align-items-center row-gap-4">
            <div className="col-lg-7 pe-lg-5">
              <div className="section-label">About Us</div>
              <h2 className="section-title mt-1">A Tradie Who Loves the Bush</h2>
              <p className="text-muted mt-3">
                Tassie's Skip was started by a local tradie with a ute, a passion for keeping Tasmania clean,
                and a serious dislike of fly-tipping. Twelve years later we're still family-owned, still local,
                and still obsessed with doing things the right way.
              </p>
              <p className="text-muted">
                We're proud to recycle or responsibly dispose of over 78% of everything that goes into our bins.
                Because if you love the bush, you look after it.
              </p>
              <div className="tradie-badge-strip">
                <div className="tradie-badge"><i className="bi bi-shield-check" /> Fully Insured</div>
                <div className="tradie-badge"><i className="bi bi-recycle" /> 78% Recycled</div>
                <div className="tradie-badge"><i className="bi bi-house-heart" /> Family Owned</div>
                <div className="tradie-badge"><i className="bi bi-geo-alt" /> Tasmanian</div>
              </div>
              <a href="#how" className="theme-btn rounded-3 mt-4">View More <i className="bi bi-arrow-right ms-1" /></a>
            </div>
            <div className="col-lg-5">
              <div className="tradie-img-wrap">
                <Image src={Aboutimg} alt="image" />
                <div className="exp-badge">
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
              <div className='text-center w-50 m-auto'>
                <div className="section-label">Choose us</div>
                <h2 className="section-title mt-1">Why Tasmanians choose us</h2>
                <p className="text-muted">
                  We're proud to recycle or responsibly dispose of over 78% of everything that goes into our bins.
                  Because if you love the bush, you look after it.
                </p>
              </div>
              <div className='row row-gap-4 mt-40'>
                <div className='col-12 col-md-6 col-lg-4'>
                  <div className='card cardChoose p-40 rounded-4'>
                    <div className='chooseIcon'><Image src={FastDelivery} alt="image" /></div>
                    <h4>Fast Tassie-wide delivery</h4>
                    <p>Hobart, Launceston and the lot. Most drops same-day.</p>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <div className='card cardChoose p-40 rounded-4'>
                    <div className='chooseIcon'><Image src={SameDaypickup} alt="image" /></div>
                    <h4>Same-day pickup & dropoff</h4>
                    <p>Booked before 11am? Skip's on your driveway by arvo.</p>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <div className='card cardChoose p-40 rounded-4'>
                    <div className='chooseIcon'><Image src={LocallTeam} alt="image" /></div>
                    <h4>Locally owned & operated</h4>
                    <p>Family-run since 2014 from a yard in Glenorchy.</p>
                  </div>
                </div>
              </div>
              <div className='row mt-4 cardChooseL'>
                <div className='col-12 col-md-6 col-lg-6'>
                  <div className='card cardChoose p-40 rounded-4'>
                    <div className='chooseIcon'><Image src={EcoFriendly} alt="image" /></div>
                    <div>
                      <h4>Responsible, eco-friendly disposal</h4>
                      <p>Up to 80% of every load is sorted and recycled.</p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                  <div className='card cardChoose p-40 rounded-4'>
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

      <section className="map-section" style={{ background: 'rgb(0 0 0 / 60%) url(../images/acrossCity.jpg) no-repeat center center / cover', backgroundAttachment: 'fixed', backgroundBlendMode: 'Overlay',}}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-label text-white">Coverage</div>
            <h2 className="section-title mt-1 text-white">We Deliver Across Tasmania</h2>
            <p className="text-white mx-auto" style={{ maxWidth: 520 }}>
              From Hobart to Launceston, Devonport to the East Coast — if it's in Tassie, we can get there.
            </p>
          </div>
          <CoverageCity  />
        </div>
      </section>

      <section className="waste-section" id="waste">
        <div className="container">
          <div className="text-center">
            <div className="section-label">Accepted Waste</div>
            <h2 className="section-title mt-1">What Goes In the Skip?</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 520 }}>
              We accept most household and commercial waste. Some items need special arrangements — check below.
            </p>
            <img src='../images/bins-category.png' alt='img' className='wasteCategory mt-md-4'  />
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="waste-col-title green">
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
              <div className="waste-col-title blue">
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
              <div className="waste-col-title red">
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
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <div className="section-label">Article</div>
              <h2 className="section-title mt-1">Latest Blog &amp; News</h2>
            </div>
            <a href="#" className="theme-btn btn-outline-green">View All <i className="bi bi-arrow-right ms-1" /></a>
          </div>
          <div className="row g-4">
            <div className="col-md-12">
              <BlogSwiper  />
            </div>
          </div>
        </div>
      </section>

      <FaqSection  />

      <FooterCta  />

      <Footer  />

    </div>
  </div>
  );
};