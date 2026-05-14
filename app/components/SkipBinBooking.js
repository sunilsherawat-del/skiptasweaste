import React, { useState } from "react";

function SkipBinBooking() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    postcode: "",
    wasteType: "",
    binSize: "",
    deliveryDate: "",
    collectionDate: "",
  });

  // Next Step
  // Next Step With Validation
    const nextStep = () => {

    // STEP 1 Validation
    if (step === 1 && !formData.postcode.trim()) {
        alert("Please enter postcode");
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

    // Move to next step
    if (step < 4) {
        setStep(step + 1);
    }
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
            <button className="theme-btn btn-sm rounded-3" onClick={nextStep}>
              Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"></path>
                </svg>
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
              className={`chip ${
                formData.wasteType === "General Waste" ? "active" : ""
              }`}
              onClick={() => selectWaste("General Waste")}
            >
                <span><span className="chip__t">General Waste</span>
                    <div className="chip__d">Household clean-outs</div>
                </span>
            </button>

            <button
              className={`chip ${
                formData.wasteType === "Green Waste" ? "active" : ""
              }`}
              onClick={() => selectWaste("Green Waste")}
            >

                <span>
                    <span className="chip__t">Green Waste</span>
                    <div className="chip__d">Branches, lawn, leaves</div>
                </span>
            </button>

            <button
              className={`chip ${
                formData.wasteType === "Construction Waste"
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
              className={`chip ${
                formData.wasteType === "Mixed Heavy"
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
              ← Back
            </button>

            <button className="theme-btn btn-sm rounded-3" onClick={nextStep}>
              Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"></path>
                </svg>
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
                className={`size-pill ${
                  formData.binSize === size ? "active" : ""
                }`}
                onClick={() => selectBin(size)}
              >
                <span className="size-pill__v">{size}</span>
              </button>
            ))}
          </div>

          <div className="book__row mt-4">
            <button className="theme-btn bg-white btn-sm rounded-3" onClick={prevStep}>
              ← Back
            </button>

            <button className="theme-btn btn-sm rounded-3" onClick={nextStep}>
              Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7"></path>
                </svg>
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
              ← Back
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
  );
}

export default SkipBinBooking;