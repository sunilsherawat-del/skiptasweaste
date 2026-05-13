"use client";
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Faq() {
  return (
      <section className="faq grayBg py-80">
          <div className="container">
                <div className="title mb-40 text-center">
                    <div className="section-label">FAQ</div>
                    <h2 className="section-title mt-1">Everything You Need to Know?</h2>
                </div>
              <div className="row row-gap-4 justify-content-between">
                  <div className="col-12 col-lg-5">
                      <div className="faq_left wow fadeInDown" style={{ background:'url(../images/faq_bg.png) no-repeat center center / cover' }}>
                          <h3 className="text-white">Still have a questions?</h3>
                          <p className="text-white">Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!</p>
                          <a href="#" className="theme-btn bg-white btn rounded-3 mt-4">Chat with us</a>
                          <img src="../images/faqIcon.gif" alt="img" className="img-fluid" />
                      </div>
                  </div>
                  <div className="col-12 col-lg-6">
                      <div className="faq-sect wow fadeInDown">
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
  )
}
