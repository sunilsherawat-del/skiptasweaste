import React from 'react'

function SkipBinBooking() {
  return (
    <div>
        <div className="book">
            <div className="book__head">
                <div>
                    <h3>Book your skip</h3>
                </div>
            </div>
            <div className="stepper">
                <button className="stepper__step"><span className="stepper__num">STEP 1</span><span className="stepper__label">Postcode</span></button>
                <button className="stepper__step"><span className="stepper__num">STEP 2</span><span className="stepper__label">Waste Type</span></button>
                <button className="stepper__step"><span className="stepper__num">STEP 3</span><span className="stepper__label">Bin Size</span></button>
                <button className="stepper__step"><span className="stepper__num">STEP 4</span><span className="stepper__label">special add-on</span></button>
                <button className="stepper__step"><span className="stepper__num">STEP 5</span><span className="stepper__label">Bin placement instruction</span></button>
                <button className="stepper__step"><span className="stepper__num">STEP 6</span><span className="stepper__label">Delivery Date</span></button>
            </div>
            <div className="book__progress"><span style={{ width: '100%' }} /></div>
            <div className="book_dataBx">
                <div className="book__field" id="passcode">
                    <label htmlFor="pc">Enter your postcode</label>
                    <input id="pc" className="book__input form-control" placeholder inputMode="numeric" maxLength={4} defaultValue />
                    <div className="book__row">
                        <span className="text-muted">Hobart · Launceston · Devonport · Burnie</span>
                    </div>
                </div>
                <div className="book__field" id="wasteType" style={{ display: "none" }}>
                    <label>Select waste type</label>
                    <div className="book__chips">
                        <button className="chip">
                            <div className="chip__ico">
                                <svg width={42} height={42} viewBox="0 0 80 80" aria-hidden="true" style={{ display: 'block' }}><ellipse cx={40} cy={68} rx={22} ry={3} fill="#1A3A2E" opacity=".18" /><rect x={14} y={20} width={52} height={6} rx={2} fill="#1A3A2E" /><rect x={36} y={14} width={8} height={8} rx={2} fill="#1A3A2E" /><path d="M18 26 L 22 64 L 58 64 L 62 26 Z" fill="#2D5A27" /><path d="M18 26 L 22 64 L 30 64 L 26 26 Z" fill="#4A7C3F" /><line x1={32} y1={32} x2={32} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><line x1={40} y1={32} x2={40} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><line x1={48} y1={32} x2={48} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><circle cx={40} cy={44} r={6} fill="#C4A35A" /><path d="M37 44 L 40 47 L 44 41" stroke="#1A3A2E" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <span><span className="chip__t">General Waste</span>
                                <div className="chip__d">Household clean-outs</div>
                            </span>
                        </button>
                        <button className="chip">
                            <div className="chip__ico">
                                <svg width={42} height={42} viewBox="0 0 80 80" aria-hidden="true" style={{ display: 'block' }}><ellipse cx={40} cy={68} rx={22} ry={3} fill="#1A3A2E" opacity=".18" /><rect x={14} y={20} width={52} height={6} rx={2} fill="#1A3A2E" /><rect x={36} y={14} width={8} height={8} rx={2} fill="#1A3A2E" /><path d="M18 26 L 22 64 L 58 64 L 62 26 Z" fill="#2D5A27" /><path d="M18 26 L 22 64 L 30 64 L 26 26 Z" fill="#4A7C3F" /><line x1={32} y1={32} x2={32} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><line x1={40} y1={32} x2={40} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><line x1={48} y1={32} x2={48} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><circle cx={40} cy={44} r={6} fill="#C4A35A" /><path d="M37 44 L 40 47 L 44 41" stroke="#1A3A2E" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <span><span className="chip__t">General Waste</span>
                                <div className="chip__d">Household clean-outs</div>
                            </span>
                        </button>
                        <button className="chip">
                            <div className="chip__ico">
                                <svg width={42} height={42} viewBox="0 0 80 80" aria-hidden="true" style={{ display: 'block' }}><ellipse cx={40} cy={68} rx={22} ry={3} fill="#1A3A2E" opacity=".18" /><rect x={14} y={20} width={52} height={6} rx={2} fill="#1A3A2E" /><rect x={36} y={14} width={8} height={8} rx={2} fill="#1A3A2E" /><path d="M18 26 L 22 64 L 58 64 L 62 26 Z" fill="#2D5A27" /><path d="M18 26 L 22 64 L 30 64 L 26 26 Z" fill="#4A7C3F" /><line x1={32} y1={32} x2={32} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><line x1={40} y1={32} x2={40} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><line x1={48} y1={32} x2={48} y2={58} stroke="#1A3A2E" strokeOpacity=".4" strokeWidth="1.5" /><circle cx={40} cy={44} r={6} fill="#C4A35A" /><path d="M37 44 L 40 47 L 44 41" stroke="#1A3A2E" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <span><span className="chip__t">General Waste</span>
                                <div className="chip__d">Household clean-outs</div>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="book__field" id="chooseSize" style={{ display: "none" }}>
                    <label>Choose bin size</label>
                    <div className="book__sizes">
                        <button className="size-pill ">
                            <span className="size-pill__v">2m³</span>
                            <span className="size-pill__l">8 wheelie bins</span>
                        </button>
                        <button className="size-pill ">
                            <span className="size-pill__v">3m³</span>
                            <span className="size-pill__l">12 wheelie bins</span>
                        </button>
                        <button className="size-pill ">
                            <span className="size-pill__v">4m³</span>
                            <span className="size-pill__l">16 wheelie bins</span>
                        </button>
                        <button className="size-pill ">
                            <span className="size-pill__v">5m³</span>
                            <span className="size-pill__l">20 wheelie bins</span>
                        </button>
                        <button className="size-pill ">
                            <span className="size-pill__v">6m³</span>
                            <span className="size-pill__l">12 wheelie bins</span>
                        </button>
                        <button className="size-pill ">
                            <span className="size-pill__v">8m³</span>
                            <span className="size-pill__l">8 wheelie bins</span>
                        </button>
                    </div>
                </div>
                <div className="book__field" id="addOn" style={{ display: "none" }}>
                    <label>special add-on</label>
                    <div className="row row-gap-3 g-2">
                        <div className="col-6 col-sm-4">
                            <div className="add_waste_list">
                                <input type="radio" name="addons" id="add-ons-0" defaultValue={1} required />
                                <div className="bin-size-bx bg-white rounded-3">
                                    <div className="bin-container">
                                        <div className="add-waste-caption">
                                            <h3>Car Tyre (no rim)</h3>
                                            <div className="price">$20.00/each</div>
                                        </div>
                                        <div className="quantity-field">
                                            <button className="value-button decrease-button">-</button>
                                            <div className="number">0</div>
                                            <button className="value-button increase-button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4">
                            <div className="add_waste_list">
                                <input type="radio" name="addons" id="add-ons-1" defaultValue={1} required />
                                <div className="bin-size-bx bg-white rounded-3">
                                    <div className="bin-container">
                                        <div className="add-waste-caption">
                                            <h3>Car Tyre (no rim)</h3>
                                            <div className="price">$20.00/each</div>
                                        </div>
                                        <div className="quantity-field">
                                            <button className="value-button decrease-button">-</button>
                                            <div className="number">0</div>
                                            <button className="value-button increase-button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4">
                            <div className="add_waste_list">
                                <input type="radio" name="addons" id="add-ons-2" defaultValue={1} required />
                                <div className="bin-size-bx bg-white rounded-3">
                                    <div className="bin-container">
                                        <div className="add-waste-caption">
                                            <h3>Car Tyre (no rim)</h3>
                                            <div className="price">$20.00/each</div>
                                        </div>
                                        <div className="quantity-field">
                                            <button className="value-button decrease-button">-</button>
                                            <div className="number">0</div>
                                            <button className="value-button increase-button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="book__field" id="skip_placement" style={{ display: "none" }}>
                    <label>SkipBin Placement</label>
                    <div className="row row-gap-4 g-2">
                        <div className="col-12 col-md-6">
                            <div className="property_option">
                                <span className="opt_deliver">Private Property</span>
                                <ul className="list-unstyled list_property mb-0">
                                    <li>
                                        <input type="radio" name="property" id="property" defaultValue="Front or backyard" data-title="Front or backyard" required />
                                        <div className="list_caption">
                                            <h5>Front or backyard</h5>
                                            <p>On your own property</p>
                                        </div>
                                    </li>
                                    <li>
                                        <input type="radio" name="property" id="property1" defaultValue="In my driveway" data-title="In my driveway" required />
                                        <div className="list_caption">
                                            <h5>In my driveway</h5>
                                            <p>Cannot obstruct the footpath</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="property_option">
                                <span className="opt_deliver">Public Property</span>
                                <ul className="list-unstyled list_property mb-0">
                                    <li>
                                        <input type="radio" name="property" id="property2" defaultValue="On the road" data-title="On the road" required />
                                        <div className="list_caption">
                                            <h5>On the road</h5>
                                            <p>Non-metered parking spot</p>
                                        </div>
                                    </li>
                                    <li>
                                        <input type="radio" name="property" id="property3" defaultValue="On the nature strip" data-title="On the nature strip" required />
                                        <div className="list_caption">
                                            <h5>On the nature strip</h5>
                                            <p>Cannot obstruct the footpath</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="book__field" id="selectDate" style={{ display: "none" }}>
                    <label>Select Your Delivery Date</label>
                    <div className="form-date text-start row g-3">
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="delivery-date">Delivery date<sup>*</sup></label>
                            <input type="date" name className="form-control" id="delivery-date" />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label htmlFor="collection-date">Collection date<sup>*</sup></label>
                            <input type="date" name className="form-control" id="collection-date" />
                        </div>
                    </div>
                    <div className="book__summary">
                        <dl>
                            <dt>Postcode</dt>
                            <dd>2000</dd>
                            <dt>Waste</dt>
                            <dd>General Waste</dd>
                            <dt>Size</dt>
                            <dd>2m³ skip bin</dd>
                            <dt>From</dt>
                            <dd>$290 flat — 4 day hire</dd>
                        </dl>
                    </div>
                </div>
                <div className="book__row">
                    <button className="book__back">← Back</button>
                    <button className="btn btn-theme">Next
                        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkipBinBooking
