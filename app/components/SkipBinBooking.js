import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from "bootstrap";

import BootstrapClient from "../components/BootstrapClient";

function SkipBinBooking() {

  const modalRef = useRef(null);
  
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    postcode: "",
    wasteType: "",
    binSize: "",
    deliveryDate: "",
    collectionDate: "",
  });

  // Next Step With Validation
  const nextStep = () => {

  // STEP 1 Validation
    if (step === 1) {

    if (!formData.postcode.trim()) {
      alert("Please enter postcode");
      return;
    }

    const modalElement = modalRef.current;

    if (modalElement) {

      const modal = new bootstrap.Modal(modalElement);

      modal.show();
    }

    return;
  }

  // STEP 2 Validation
  if (step === 2 && !formData.wasteType) {
    alert("Please select waste type");
    return;
  }

  // STEP 3 Validation
  if (step === 3 && !formData.binSize) {
    alert("Please select bin size");
    return;
  }

  // STEP 4 Validation
  if (
    step === 4 &&
    (!formData.deliveryDate || !formData.collectionDate)
  ) {
    alert("Please select delivery and collection dates");
    return;
  }

  if (step < 4) {
    setStep(step + 1);
  }
};

const handleAgree = () => {

  const modalElement = modalRef.current;

  const modal = bootstrap.Modal.getInstance(modalElement);

  if (modal) {
    modal.hide();
  }

  setTimeout(() => {
    setStep(2);
  }, 300);
};

  // Previous Step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Waste Type
  const selectWaste = (type) => {
    setFormData({
      ...formData,
      wasteType: type,
    });
  };

  // Handle Bin Size
  const selectBin = (size) => {
    setFormData({
      ...formData,
      binSize: size,
    });
  };

  return (
    <div>
        <div className="book wow animate__animated animate__fadeInUp">
          <div className="book__head mb-3">
            <h3 className="text-white">Book your skip</h3>
          </div>

          {/* Stepper */}
          <div className="stepper">
            <button className={`stepper__step ${step >= 1 ? "is-active" : ""}`}>
              <span className="stepper__num">STEP 1</span>
              <span className="stepper__label">Postcode</span>
            </button>

            <button className={`stepper__step ${step >= 2 ? "is-active" : ""}`}>
              <span className="stepper__num">STEP 2</span>
              <span className="stepper__label">Waste Type</span>
            </button>

            <button className={`stepper__step ${step >= 3 ? "is-active" : ""}`}>
              <span className="stepper__num">STEP 3</span>
              <span className="stepper__label">Bin Size</span>
            </button>

            <button className={`stepper__step ${step >= 4 ? "is-active" : ""}`}>
              <span className="stepper__num">STEP 4</span>
              <span className="stepper__label">Date</span>
            </button>
          </div>

          {/* Progress */}
          <div className="book__progress">
            <span style={{ width: `${(step / 4) * 100}%` }} />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="book__field">
              <label>Enter your postcode</label>

              <input
                type="text"
                className="form-control"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                maxLength={4}
              />

              <div className="book__row mt-4">
                <button type="button" className="theme-btn btn-sm rounded-3" onClick={nextStep}>
                  Next
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="book__field">
              <label>Select Waste Type</label>

              <div className="book__chips">
                <button
                  className={`chip ${formData.wasteType === "General Waste" ? "active" : ""
                    }`}
                  onClick={() => selectWaste("General Waste")}
                >
                  <span><span className="chip__t">General Waste</span>
                    <div className="chip__d">Household clean-outs</div>
                  </span>
                </button>

                <button
                  className={`chip ${formData.wasteType === "Green Waste" ? "active" : ""
                    }`}
                  onClick={() => selectWaste("Green Waste")}
                >

                  <span>
                    <span className="chip__t">Green Waste</span>
                    <div className="chip__d">Branches, lawn, leaves</div>
                  </span>
                </button>

                <button
                  className={`chip ${formData.wasteType === "Construction Waste"
                      ? "active"
                      : ""
                    }`}
                  onClick={() => selectWaste("Construction Waste")}
                >
                  <span><span className="chip__t">Building Reno</span>
                    <div className="chip__d">Tiles, plaster, timber</div>
                  </span>
                </button>

                <button
                  className={`chip ${formData.wasteType === "Mixed Heavy"
                      ? "active"
                      : ""
                    }`}
                  onClick={() => selectWaste("Mixed Heavy")}
                >

                  <span><span className="chip__t">Mixed Heavy</span>
                    <div className="chip__d">Soil, brick, concrete</div>
                  </span>
                </button>
              </div>

              <div className="book__row mt-4">
                <button className="theme-btn bg-white btn-sm rounded-3" onClick={prevStep}>
                  <i className="bi bi-arrow-left-short"></i> Back
                </button>

                <button type="button" className="theme-btn btn-sm rounded-3" onClick={nextStep}>
                  Next
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="book__field">
              <label>Choose Bin Size</label>

              <div className="book__sizes">
                {["2m³", "3m³", "4m³", "5m³", "6m³", "7m³"].map((size) => (
                  <button
                    key={size}
                    className={`size-pill ${formData.binSize === size ? "active" : ""
                      }`}
                    onClick={() => selectBin(size)}
                  >
                    <span className="size-pill__v">{size}</span>
                  </button>
                ))}
              </div>

              <div className="book__row mt-4">
                <button className="theme-btn bg-white btn-sm rounded-3" onClick={prevStep}>
                  <i className="bi bi-arrow-left-short"></i> Back
                </button>

                <button type="button" className="theme-btn btn-sm rounded-3" onClick={nextStep}>
                  Next
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="book__field">
              <label>Select Dates</label>

              <div className="row g-3">
                <div className="col-md-6">
                  <label>Delivery Date</label>

                  <input
                    type="date"
                    name="deliveryDate"
                    className="form-control"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label>Collection Date</label>

                  <input
                    type="date"
                    name="collectionDate"
                    className="form-control"
                    value={formData.collectionDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="book__summary mt-4">
                <h4>Booking Summary</h4>

                <p>
                  <strong>Postcode:</strong> {formData.postcode}
                </p>

                <p>
                  <strong>Waste Type:</strong> {formData.wasteType}
                </p>

                <p>
                  <strong>Bin Size:</strong> {formData.binSize}
                </p>

                <p>
                  <strong>Delivery:</strong> {formData.deliveryDate}
                </p>

                <p>
                  <strong>Collection:</strong> {formData.collectionDate}
                </p>
              </div>

              <div className="book__row mt-4">
                <button className="theme-btn bg-white btn-sm rounded-3" onClick={prevStep}>
                  <i className="bi bi-arrow-left-short"></i> Back
                </button>

                <button
                  className="theme-btn btn-sm rounded-3"
                  onClick={() => alert("Booking Submitted")}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="modal fade" id="material" ref={modalRef} tabIndex={-1} aria-labelledby="exampleMaterial" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="prohibited-material">
                  {/* <div className="text-end"><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /></div> */}
                  <div className="text-center">
                    <img src="/images/caution-danger.jpg" alt="" />
                  </div>
                  <h3>PROHIBITED ITEMS - SHOAL BAY TIP</h3>
                  <ul className="list-unstyled mt-3">
                    <li>No asbestos or suspected asbestos (including fibro)</li>
                    <li>No liquids (paint, oils, food waste, slurry)</li>
                    <li>No hazardous waste (chemicals, fuels, batteries)</li>
                    <li>No gas bottles or pressurised containers</li>
                    <li>No e-waste (TVs, computers, electrical items)</li>
                    <li>No medical or biohazard waste</li>
                    <li>No wet concrete or slurry</li>
                    <li>No hot ash or burning materials</li>
                    <li>No insulation or polystyrene</li>
                    <li>No tyres or mattresses (separate charges apply)</li>
                    <li>No insulation or polystyrene</li>
                  </ul>
                  <p>All loads are assumed uncontaminated.
                    Loads are inspected at Shoal Bay and may be reclassified.
                    Contaminated loads will incur additional charges.</p>
                  <p>Please see <a href="#" target="_blank" className="text-underline">Terms &amp; Conditions</a> for a detailed list of prohibited items</p>
                  <div className="text-center">
                    <button type="button" className="theme-btn rounded-3 btn-sm" id="agreeBtn" onClick={handleAgree}>I Agree</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BootstrapClient />
      </div>
  );
}

  export default SkipBinBooking;