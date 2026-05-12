import React, { useMemo, useState } from "react";

const deliveryData = [
  {
    region: "Greater Hobart",
    cities: [
      "Hobart",
      "Glenorchy",
      "Kingston",
      "Sorell",
      "Richmond",
      "New Norfolk",
    ],
    style: { top: "65%", left: "46%" },
  },
  {
    region: "Northern Tas",
    cities: ["Launceston", "Deloraine", "Scottsdale"],
    style: { top: "35%", left: "55%" },
  },
  {
    region: "North-West Coast",
    cities: ["Devonport", "Burnie", "Ulverstone"],
    style: { top: "24%", left: "39%" },
  },
  {
    region: "Huon & D'Entrecasteaux",
    cities: ["Huonville", "Bicheno", "St Helens"],
    style: { top: "55%", left: "65%" },
  },
];

export default function DeliveryAreas() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [search, setSearch] = useState("");

  // Filter cities
  const filteredCities = useMemo(() => {
    let cities = [];

    if (activeRegion === "All") {
      cities = deliveryData.flatMap((item) => item.cities);
    } else {
      const selected = deliveryData.find(
        (item) => item.region === activeRegion
      );
      cities = selected ? selected.cities : [];
    }

    // Search filter
    return cities.filter((city) =>
      city.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeRegion, search]);

  return (
    <div className="row g-4 align-items-center">
      {/* LEFT MAP */}
      <div className="col-lg-6">
        <div className="map-visual position-relative">
          <i className="map-icon bi bi-map" />

          {/* ALL TAB */}
          <div
            className={`map-label ${
              activeRegion === "All" ? "active" : ""
            }`}
            style={{ top: "10%", left: "10%" }}
            onClick={() => setActiveRegion("All")}
          >
            <div className="map-dot" />
            All Areas
          </div>

          {/* MAP LABELS */}
          {deliveryData.map((item, index) => (
            <div
              key={index}
              className={`map-label ${
                activeRegion === item.region ? "active" : ""
              }`}
              style={item.style}
              onClick={() => setActiveRegion(item.region)}
            >
              <div className="map-dot" />
              {item.region}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-6">
        <h4
          className="heading-font fw-bold mb-3"
          style={{ color: "var(--white)" }}
        >
          Delivery Areas
        </h4>

        {/* SEARCH INPUT */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* AREA LIST */}
        <ul className="area-list list-unstyled">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <li key={index} className="area-item">
                <i className="bi bi-geo-alt" />
                {city}
              </li>
            ))
          ) : (
            <li className="text-white">No cities found</li>
          )}
        </ul>

        <p className="text-white small mt-3 mb-0">
          <i
            className="bi bi-info-circle me-1"
            style={{ color: "var(--white)" }}
          />
          Don't see your area?{" "}
          <a
            href="tel:1300000000"
            style={{ color: "var(--green-dark)", fontWeight: 600 }}
          >
            Call us
          </a>{" "}
          — we often deliver to surrounding areas too.
        </p>
      </div>
    </div>
  );
}