import React from 'react'

export default function FooterCta() {
  return (
    <div className="container mb-3">
        <div className="row">
            <div className="col-12">
                <div className="cta_home d-flex align-items-center px-md-3 py-40" style={{ background: 'url(../images/footerCtaBg.jpg) no-repeat center center/ cover', borderRadius: 28 }}>
                    <img src="../images/ctaTank.png" alt="bin container" className="bin_container" />
                    <div className="cta_caption medium_cta_caption text-left">
                        <h2>Ready to book your skip bin?</h2>
                        <p>Whether you’re a homeowner or a contractor, our blog has you covered. Read practical guides and learn how to simplify your bin hire experience.</p>
                        <div className="btn_group d-flex align-items-center gap-3">
                            <a href="#" className="theme-btn bg-black rounded-3">Book Now</a>
                            <a href="#" className="theme-btn bg-white rounded-3"><i className="bi bi-telephone me-2" style={{ color: 'var(--green-primary)' }} /> (03) 6234 7788</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
