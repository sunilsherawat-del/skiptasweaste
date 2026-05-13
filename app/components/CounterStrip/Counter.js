"use client";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="container">
        <div className="row g-0">

          <div className="col-6 col-md-3">
            <div className="stat-item">
              <div className="stat-value">
                <Counter end={12400} suffix="+" />
              </div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="stat-item">
              <div className="stat-value">
                <Counter end={4.9} suffix=" ★" />
              </div>
              <div className="stat-label">Google Rating</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="stat-item">
              <div className="stat-value">
                <Counter end={78} suffix="%" />
              </div>
              <div className="stat-label">Waste Recycled</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="stat-item">
              <div className="stat-value">
                <Counter end={60} suffix=" min" />
              </div>
              <div className="stat-label">Avg Response Time</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}