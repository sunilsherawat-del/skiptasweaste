import React from 'react'

export default function FooterSection() {
  return (
    <div>
        <footer className="footer-main">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="footer-brand">Tassie's<span>Skip</span></div>
                        <div className="footer-desc">
                            Family-owned skip bin hire serving all of Tasmania. Reliable, affordable, and seriously
                            committed to recycling.
                        </div>
                        <div className="footer-social">
                            <a href="#"><i className="bi bi-facebook" /></a>
                            <a href="#"><i className="bi bi-instagram" /></a>
                            <a href="#"><i className="bi bi-google" /></a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer-col-title">Services</div>
                        <ul className="footer-links list-unstyled">
                            <li><a href="#">Skip Bin Hire</a></li>
                            <li><a href="#">Green Waste</a></li>
                            <li><a href="#">Construction Waste</a></li>
                            <li><a href="#">Commercial Bins</a></li>
                            <li><a href="#">Same-Day Delivery</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="footer-col-title">Company</div>
                        <ul className="footer-links list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="footer-col-title">Get in Touch</div>
                        <ul className="footer-links list-unstyled">
                            <li><i className="bi bi-telephone me-2" style={{ color: 'var(--green-primary)' }} /><a href="tel:1300000000">1300 XXX XXX</a></li>
                            <li><i className="bi bi-envelope me-2" style={{ color: 'var(--green-primary)' }} /><a href="mailto:hello@tassieskip.com.au">hello@tassieskip.com.au</a></li>
                            <li><i className="bi bi-clock me-2" style={{ color: 'var(--green-primary)' }} />Mon–Sat 7am–6pm</li>
                            <li><i className="bi bi-geo-alt me-2" style={{ color: 'var(--green-primary)' }} />Hobart, Tasmania</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="footer-bottom">
            <div className="container">
                © 2026 Tassie's Skip Pty Ltd &nbsp;·&nbsp;
                <a href="#" style={{ color: '#cfcfcf' }}>Privacy Policy</a> &nbsp;·&nbsp;
                <a href="#" style={{ color: '#cfcfcf' }}>Terms &amp; Conditions</a>
            </div>
        </div>
    </div>
  )
}
