import Header from './components/Header/Header';
import SkipBinBooking from './components/BookingForm/SkipBinBooking';
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

export default function Home() {
  return (
  <div className="pageContent">
    <Header />
    <div className='pageWraper'>
      <section className="hero" id="home">
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-badge"><i className="bi bi-award-fill me-1" /> Tasmania's #1 Skip Bin Provider</div>
              <h1>Skip Bin Hire<br /><span>Made Simple</span> in Tasmania</h1>
              <p className="lead">Affordable, reliable, and eco-friendly skip bin hire for homes, tradies, and
                businesses across the Apple Isle.</p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#bins" className="theme-btn rounded-3">
                  Choose a Bin <i className="bi bi-arrow-down ms-1" />
                </a>
                <a href="#how" className="theme-btn btn-outline-green text-white">
                  <i className="bi bi-play-circle me-1" /> How It Works
                </a>
              </div>
            </div>
            <div className="col-lg-6" id="booking">
              <SkipBinBooking />
            </div>
          </div>
        </div>
      </section>
    
      <div className="stats-strip">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-value">12,400+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-value">4.9 ★</div>
                <div className="stat-label">Google Rating</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-value">78%</div>
                <div className="stat-label">Waste Recycled</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-value">60min</div>
                <div className="stat-label">Avg Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <div className="col-sm-6 col-lg-4">
              <div className="bin-card">
                <div className="bin-card-img">
                  <div className="bin-size-badge">2m³</div>
                  <i className="bi bi-trash3" />
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
            <div className="col-sm-6 col-lg-4">
              <div className="bin-card">
                <div className="bin-card-img">
                  <div className="bin-size-badge">3m³</div>
                  <i className="bi bi-trash3" />
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
            <div className="col-sm-6 col-lg-4">
              <div className="bin-card featured position-relative">
                <div className="position-absolute top-0 end-0 m-2 tag-index">
                  <span className="tag-pill tag-red"><i className="bi bi-star-fill me-1" />Most Popular</span>
                </div>
                <div className="bin-card-img" style={{ background: 'linear-gradient(135deg,#c8f0dc,#b8e4f4)' }}>
                  <div className="bin-size-badge">4m³</div>
                  <i className="bi bi-trash3" />
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
            <div className="col-sm-6 col-lg-4">
              <div className="bin-card">
                <div className="bin-card-img">
                  <div className="bin-size-badge">6m³</div>
                  <i className="bi bi-trash3" />
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
            <div className="col-sm-6 col-lg-4">
              <div className="bin-card">
                <div className="bin-card-img">
                  <div className="bin-size-badge">8m³</div>
                  <i className="bi bi-trash3" />
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
            <div className="col-sm-6 col-lg-4">
              <div className="bin-card">
                <div className="bin-card-img">
                  <div className="bin-size-badge">10m³</div>
                  <i className="bi bi-trash3" />
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
          <div className="text-center mt-4">
            <p className="text-muted small mb-0">
              <i className="bi bi-info-circle me-1" style={{ color: 'var(--blue-primary)' }} />
              Not sure which size? <a href="tel:1300000000" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Call
                us</a> — we'll help you choose the right bin.
            </p>
          </div>
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

      <section className="map-section" id="delivery">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-label text-white">Coverage</div>
            <h2 className="section-title mt-1 text-white">We Deliver Across Tasmania</h2>
            <p className="text-white mx-auto" style={{ maxWidth: 520 }}>
              From Hobart to Launceston, Devonport to the East Coast — if it's in Tassie, we can get there.
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="map-visual">
                <i className="map-icon bi bi-map" />
                <div className="map-label" style={{ top: '65%', left: '46%' }}><div className="map-dot" /> Greater Hobart</div>
                <div className="map-label" style={{ top: '35%', left: '55%' }}><div className="map-dot" /> Northern Tas</div>
                <div className="map-label" style={{ top: '24%', left: '39%' }}><div className="map-dot" /> North-West Coast</div>
                <div className="map-label" style={{ top: '55%', left: '65%' }}><div className="map-dot" /> Huon & D'Entrecasteaux</div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="heading-font fw-bold mb-3" style={{ color: 'var(--white)' }}>Delivery Areas</h4>
              <div></div>
              <ul className="area-list list-unstyled">
                <li className="area-item"><i className="bi bi-geo-alt" />Hobart</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Glenorchy</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Kingston</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Huonville</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Launceston</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Devonport</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Burnie</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Ulverstone</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Sorell</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Richmond</li>
                <li className="area-item"><i className="bi bi-geo-alt" />New Norfolk</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Bicheno</li>
                <li className="area-item"><i className="bi bi-geo-alt" />St Helens</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Deloraine</li>
                <li className="area-item"><i className="bi bi-geo-alt" />Scottsdale</li>
              </ul>
              <p className="text-white small mt-3 mb-0">
                <i className="bi bi-info-circle me-1" style={{ color: 'var(--white)' }} />
                Don't see your area? <a href="tel:1300000000" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Call us</a> — we often deliver to
                surrounding areas too.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
  );
};